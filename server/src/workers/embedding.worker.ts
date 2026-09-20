import { Worker, Job } from "bullmq";
import {
  EMBEDDING_QUEUE_NAME,
} from "../queues/embedding.queue.js";
import type { EmbeddingJobData } from "../queues/embedding.queue.js";
import prisma from "../config/prisma.js";
import { connection } from "../queues/bull.js";
import { ArticleRepository } from "../modules/article/article.repository.js";
import { CategoryRepository } from "../modules/category/category.repository.js";
import { EmbeddingClient } from "../lib/ai/embedding.client.js";
import { EmbeddingRepository } from "../modules/embedding/embedding.repository.js";
import { EmbeddingService } from "../modules/embedding/embedding.service.js";

const articleRepository = new ArticleRepository();
const categoryRepository = new CategoryRepository();
const embeddingClient = new EmbeddingClient();

const embeddingRepository = new EmbeddingRepository(prisma);

const embeddingService = new EmbeddingService(
  embeddingClient,
  embeddingRepository
);

export const embeddingWorker = new Worker<EmbeddingJobData>(
  EMBEDDING_QUEUE_NAME,

  async (job: Job<EmbeddingJobData>) => {
    const { articleId } = job.data;

    console.log(
      `[EmbeddingWorker] Processing article: ${articleId}`
    );

    const article =
      await articleRepository.findForEmbedding(articleId);

    if (!article) {
      throw new Error(
        `Article not found: ${articleId}`
      );
    }
    console.log(
      `[EmbeddingWorker] Found article: ${JSON.stringify(article)}`
    );
    await embeddingService.generateAndSaveEmbedding({
      id: article.id,
      title: article.title,
      description: article.description,
      category: article.category,
    });

    console.log(
      `[EmbeddingWorker] Completed article: ${articleId}`
    );
  },

  {
    connection: connection,

    concurrency: 2,
  }
);

embeddingWorker.on("completed", (job) => {
  console.log(
    `[EmbeddingWorker] Job completed: ${job.id}`
  );
});

embeddingWorker.on("failed", (job, error) => {
  console.error(
    `[EmbeddingWorker] Job failed: ${job?.id}`,
    error
  );
});