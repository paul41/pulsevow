/*
  Warnings:

  - You are about to drop the column `embeddingId` on the `Article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "embeddingId";

-- CreateTable
CREATE TABLE "ArticleEmbedding" (
    "id" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ArticleEmbedding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ArticleEmbedding_articleId_key" ON "ArticleEmbedding"("articleId");

-- CreateIndex
CREATE INDEX "ArticleEmbedding_articleId_idx" ON "ArticleEmbedding"("articleId");

-- AddForeignKey
ALTER TABLE "ArticleEmbedding" ADD CONSTRAINT "ArticleEmbedding_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;
