import { createHash } from "node:crypto";
import { ArticleRepository } from "../article/article.repository.js";
import type { NormalizedArticle } from "./types.js";

export interface DuplicateCheckResult {
  isDuplicate: boolean;
  reason?: "URL" | "CONTENT_HASH";
  contentHash: string | undefined;
}

export class DeduplicatorService {
  constructor(
    private readonly articleRepository = new ArticleRepository()
  ) {}

  /**
   * Checks whether articles already exist.
   *
   * Performs a single database lookup for all URLs
   * and content hashes in the batch.
   */
  async checkDuplicates(
    articles: NormalizedArticle[]
  ): Promise<DuplicateCheckResult[]> {
    if (!articles.length) {
      return [];
    }

    /**
     * Generate content hashes once for the entire batch.
     *
     * If the ingestion service has already generated the hash,
     * reuse it instead of generating it again.
     */
    const contentHashes = articles.map(
      (article) =>
        article.contentHash ??
        this.generateContentHash(article)
    );

    const urls = articles
      .map((article) => article.url)
      .filter(
        (url): url is string =>
          typeof url === "string" && url.length > 0
      );

    /**
     * ONE database query:
     *
     * WHERE url IN (...)
     *    OR contentHash IN (...)
     */
    const existingArticles =
      await this.articleRepository.findByUrlsOrContentHashes(
        urls,
        contentHashes
      );

    /**
     * Create in-memory lookup maps.
     *
     * This makes checking each article O(1).
     */
    const existingByUrl = new Map<
      string,
      {
        url: string;
        contentHash: string | null;
      }
    >();

    const existingByHash = new Map<
      string,
      {
        url: string;
        contentHash: string | null;
      }
    >();

    for (const existingArticle of existingArticles) {
      if (existingArticle.url) {
        existingByUrl.set(
          existingArticle.url,
          existingArticle
        );
      }

      if (existingArticle.contentHash) {
        existingByHash.set(
          existingArticle.contentHash,
          existingArticle
        );
      }
    }

    /**
     * Determine duplicate status in memory.
     */
    return articles.map((article, index) => {
      const contentHash = contentHashes[index]!;

      /**
       * URL is the first duplicate check.
       */
      const existingByUrlArticle =
        existingByUrl.get(article.url);

      if (existingByUrlArticle) {
        return {
          isDuplicate: true,
          reason: "URL",
          contentHash:
            existingByUrlArticle.contentHash ??
            contentHash,
        };
      }

      /**
       * Content hash is the second duplicate check.
       */
      const existingByHashArticle =
        existingByHash.get(contentHash);

      if (existingByHashArticle) {
        return {
          isDuplicate: true,
          reason: "CONTENT_HASH",
          contentHash,
        };
      }

      /**
       * New article.
       */
      return {
        isDuplicate: false,
        contentHash,
      };
    });
  }

  /**
   * Generates a deterministic hash based on article content.
   */
  generateContentHash(
    article: NormalizedArticle
  ): string {
    const payload = [
      article.title,
      article.description ?? "",
      article.author ?? "",
    ]
      .map((value) =>
        value?.trim().toLowerCase()
      )
      .join("|");

    return createHash("sha256")
      .update(payload)
      .digest("hex");
  }
}