import { PrismaClient } from "@prisma/client";
import crypto from "node:crypto";

export class EmbeddingRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async saveEmbedding(
    articleId: string,
    embedding: number[],
    model: string
  ): Promise<void> {
    const vector = `[${embedding.join(",")}]`;

    await this.prisma.$executeRaw`
      INSERT INTO "ArticleEmbedding"
        ("id", "articleId", "model", "embedding", "createdAt", "updatedAt")
      VALUES
        (
          ${crypto.randomUUID()},
          ${articleId},
          ${model},
          ${vector}::vector,
          NOW(),
          NOW()
        )
      ON CONFLICT ("articleId")
      DO UPDATE SET
        "model" = EXCLUDED."model",
        "embedding" = EXCLUDED."embedding",
        "updatedAt" = NOW()
    `;
  }

  async findByArticleId(articleId: string) {
    return this.prisma.$queryRaw`
      SELECT
        "id",
        "articleId",
        "model",
        "embedding",
        "createdAt",
        "updatedAt"
      FROM "ArticleEmbedding"
      WHERE "articleId" = ${articleId}
      LIMIT 1
    `;
  }
}