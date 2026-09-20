-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "contentHash" TEXT,
ADD COLUMN     "embeddingId" TEXT;

-- CreateIndex
CREATE INDEX "Article_contentHash_idx" ON "Article"("contentHash");
