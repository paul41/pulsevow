/*
  Warnings:

  - You are about to drop the column `content` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `contentHash` on the `Article` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Article_contentHash_key";

-- AlterTable
ALTER TABLE "Article" DROP COLUMN "content",
DROP COLUMN "contentHash",
ALTER COLUMN "status" SET DEFAULT 'DRAFT';
