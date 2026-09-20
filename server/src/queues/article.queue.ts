import { Job } from "bullmq";
import { createQueue, createWorker, createQueueEvents } from "./bull.js";

import { NormalizerService } from "../modules/ingestion/normalizer.service.js";
import { DeduplicatorService } from "../modules/ingestion/deduplicator.service.js";
import { ArticleRepository } from "../modules/article/article.repository.js";
import { ArticleService } from "../modules/article/article.service.js";
import { embeddingQueue } from "./embedding.queue.js";
export const ARTICLE_QUEUE = "article-ingestion";

export const articleQueue = createQueue(ARTICLE_QUEUE);

const articleRepo = new ArticleRepository();
const articleService = new ArticleService();

export const articleWorker = createWorker(
  ARTICLE_QUEUE,
  async (job: Job<any>) => {
    // Push AI Job here later
    //await embeddingQueue.enqueueArticleEmbedding({ articleId: job.data.articleId });
  }
);

const events = createQueueEvents(ARTICLE_QUEUE);

events.on("completed", ({ jobId }) => {
  console.log(`Job ${jobId} completed`);
});

events.on("failed", ({ jobId, failedReason }) => {
  console.error(`Job ${jobId} failed: ${failedReason}`);
});