import { Queue } from "bullmq";
import { connection } from "./bull.js";

export const EMBEDDING_QUEUE_NAME = "article.embedding";

export interface EmbeddingJobData {
  articleId: string;
}

export const embeddingQueue = new Queue<EmbeddingJobData>(
  EMBEDDING_QUEUE_NAME,
  {
    connection: connection,
    defaultJobOptions: {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 2000,
      },
      removeOnComplete: 100,
      removeOnFail: 500,
    },
  }
);

export async function enqueueArticleEmbedding(
  articleId: string
): Promise<void> {
  await embeddingQueue.add(
    "generate-embedding",
    { articleId },
    {
      jobId: `embedding-${articleId}`,
    }
  );
}