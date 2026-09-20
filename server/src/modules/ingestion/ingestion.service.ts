import pLimit from "p-limit";
import { SourceRepository } from "../source/source.repository.js";
import { SourceFeedRepository } from "../source/sourceFeed.repository.js";
import { ArticleRepository } from "../article/article.repository.js";
import { ArticleService } from "../article/article.service.js";
import { ScrapperService } from "./scraper.service.js";
import { RssService } from "./rss.service.js";
import { NormalizerService } from "./normalizer.service.js";
import { DeduplicatorService } from "./deduplicator.service.js";
import { TagService } from "../tag/tag.service.js";

import {
  enqueueArticleEmbedding,
  embeddingQueue,
} from "../../queues/embedding.queue.js";

export class IngestionService {
  private readonly rssService = new RssService();
  private readonly articleScrapperService = new ScrapperService();
  private readonly normalizer = new NormalizerService();
  private readonly deduplicator = new DeduplicatorService();

  private readonly sourceRepo = new SourceRepository();
  private readonly sourceFeedRepo = new SourceFeedRepository();
  private readonly articleRepo = new ArticleRepository();

  private readonly articleService = new ArticleService();
  private readonly tagService = new TagService();

  /**
   * Controls number of sources being processed concurrently.
   */
  private readonly sourceLimit = pLimit(10);

  /**
   * Controls article-level processing concurrency.
   */
  private readonly articleLimit = pLimit(20);

  /**
   * Controls Web page description enrichment concurrency.
   */
  private readonly contentLimit = pLimit(10);

  /**
   * Number of articles processed in one deduplication batch.
   */
  private readonly articleBatchSize = 100;

  async ingestAllSources(): Promise<void> {
    const sourceBatchSize = 150;
    let offset = 0;

    while (true) {
      const sources = await this.sourceRepo.findByActiveBatch(
        true,
        sourceBatchSize,
        offset
      );

      if (!sources.length) {
        break;
      }

      const feedEndPoints = (
        await Promise.all(
          sources.map(async (source) => {
            const feeds =
              await this.sourceFeedRepo.findBySourceId(
                source.id
              );

            return feeds.map((feed) => ({
              name: source.name,
              sourceId: feed.sourceId,
              url: feed.url,
              language: source.language ?? "en",
            }));
          })
        )
      ).flat();

      /**
       * Process feed sources concurrently.
       */
      await Promise.allSettled(
        feedEndPoints.map((source) =>
          this.sourceLimit(() =>
            this.ingestSource(source)
          )
        )
      );

      offset += sourceBatchSize;
    }
  }

  /**
   * Fetch all articles for a feed source and process
   * them in batches.
   */
  private async ingestSource(source: any): Promise<void> {
    try {
      const feedItems =
        await this.rssService.fetchFeed(source);

      const articles = feedItems.flat();

      console.info(
        `Fetched ${articles.length} articles from ${source.name}`
      );

      for (
        let i = 0;
        i < articles.length;
        i += this.articleBatchSize
      ) {
        const batch = articles.slice(
          i,
          i + this.articleBatchSize
        );

        await this.processBatch(batch);

        console.info(
          `Processed batch ${
            Math.floor(i / this.articleBatchSize) + 1
          } (${batch.length} articles) from ${source.name}`
        );
      }
    } catch (error) {
      console.error(
        `Failed source: ${source.name}`,
        error
      );
    }
  }

  /**
   * Normalize + deduplicate a batch of articles.
   */
  private async processBatch(
    feeds: unknown[]
  ): Promise<void> {
    if (!feeds.length) {
      return;
    }

    /**
     * 1. Normalize all feeds.
     */
    const articles = feeds.map((feed) =>
      this.normalizer.normalize(feed)
    );

    /**
     * 2. Remove duplicates within current batch.
     */
    const uniqueArticles =
      this.removeInternalDuplicates(articles);

    if (!uniqueArticles.length) {
      return;
    }

    /**
     * 3. Check URLs + content hashes in one DB call.
     */
    const duplicateResults =
      await this.deduplicator.checkDuplicates(
        uniqueArticles
      );

    /**
     * 4. Keep only new articles.
     */
    const newArticles = uniqueArticles
      .map((article, index) => ({
        article,
        duplicate: duplicateResults[index],
      }))
      .filter(
        ({ duplicate }) => !duplicate?.isDuplicate
      )
      .map(({ article, duplicate }) => {
        article.contentHash =
          duplicate?.contentHash;

        return article;
      });

    if (!newArticles.length) {
      console.info(
        `No new articles found in batch of ${feeds.length}`
      );

      return;
    }

    console.info(
      `${newArticles.length} new articles found ` +
        `out of ${feeds.length}`
    );

    /**
     * 5. Persist new articles with controlled
     * concurrency.
     */
    await Promise.allSettled(
      newArticles.map((article) =>
        this.articleLimit(() =>
          this.createArticle(article)
        )
      )
    );
  }

  /**
   * Remove duplicates that exist inside the current
   * ingestion batch itself.
   */
  private removeInternalDuplicates(
    articles: any[]
  ): any[] {
    const seenUrls = new Set<string>();
    const seenHashes = new Set<string>();

    const uniqueArticles: any[] = [];

    for (const article of articles) {
      /**
       * URL duplicate.
       */
      if (article.url) {
        if (seenUrls.has(article.url)) {
          continue;
        }

        seenUrls.add(article.url);
      }

      /**
       * Generate content hash once.
       */
      const contentHash =
        this.deduplicator.generateContentHash(
          article
        );

      /**
       * Same content in current batch.
       */
      if (seenHashes.has(contentHash)) {
        continue;
      }

      seenHashes.add(contentHash);

      /**
       * Store generated hash.
       */
      article.contentHash = contentHash;

      uniqueArticles.push(article);
    }

    return uniqueArticles;
  }

  /**
   * Create one article and complete all required
   * preprocessing before sending it to AI.
   *
   * Flow:
   *
   * Create Article
   *      ↓
   * Description Enrichment
   *      ↓
   * Save Tags
   *      ↓
   * Enqueue AI
   */
  private async createArticle(
    article: any
  ): Promise<void> {
    try {
      /**
       * 1. Map normalized article to DB model.
       */
      const articleDoc =
        this.articleService.articleMapper(
          article
        );

      /**
       * 2. Create article in PostgreSQL.
       */
      const created =
        await this.articleRepo.create(
          articleDoc
        );

      /**
       * 3. Enrich description BEFORE AI processing.
       *
       * p-limit still controls concurrency, but we
       * await the task so the embedding worker cannot
       * start before enrichment is complete.
       */
      if (!articleDoc.description && article.url) {
        console.log(
          `Enriching description for ${article.url}`
        );

        try {
          const description =
            await this.contentLimit(() =>
              this.articleScrapperService.enrichDescription(
                article.url
              )
            );

          if (description) {
            await this.articleRepo.update(
              created.id,
              {
                description,
              }
            );

            console.info(
              `Description enriched for article ${created.id}`
            );
          }
        } catch (error) {
          /**
           * Enrichment is best-effort.
           *
           * The article can still continue to AI
           * processing without a description.
           */
          console.error(
            `Failed to enrich description for ${article.url}`,
            error
          );
        }
      }

      /**
       * 4. Save tags.
       */
      await this.tagService.saveArticleTags(
        created.id,
        article
      );

      /**
       * 5. Enqueue AI processing only after
       * article preprocessing is complete.
       */
      await enqueueArticleEmbedding(
        created.id
      );

      console.info(
        `AI processing queued for article ${created.id}`
      );
    } catch (error) {
      console.error(
        `Failed to create/process article: ${article.title}`,
        error
      );

      /**
       * Re-throw so Promise.allSettled() can correctly
       * identify this article as rejected.
       */
      throw error;
    }
  }

  /**
   * Useful for monitoring the embedding queue.
   *
   * This can later be exposed through an admin/debug
   * endpoint instead of logging for every article.
   */
  async getEmbeddingQueueStatus() {
    return embeddingQueue.getJobCounts(
      "waiting",
      "active",
      "completed",
      "failed",
      "delayed"
    );
  }
}
