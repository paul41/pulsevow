/*
  Warnings:

  - A unique constraint covering the columns `[contentHash]` on the table `Article` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contentHash` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "contentHash" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Article_contentHash_key" ON "Article"("contentHash");
