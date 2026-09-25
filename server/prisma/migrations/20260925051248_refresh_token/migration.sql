CREATE EXTENSION IF NOT EXISTS vector;

-- DropIndex
DROP INDEX "RefreshToken_token_key";

-- AlterTable
ALTER TABLE "ArticleEmbedding"
ADD COLUMN "embedding" vector(1536) NOT NULL;

-- AlterTable
ALTER TABLE "RefreshToken"
DROP COLUMN "token",
ADD COLUMN "revokedAt" TIMESTAMP(3),
ADD COLUMN "tokenHash" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_tokenHash_key" ON "RefreshToken"("tokenHash");

-- CreateIndex
CREATE INDEX "RefreshToken_tokenHash_idx" ON "RefreshToken"("tokenHash");