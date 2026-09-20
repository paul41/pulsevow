/*
  Warnings:

  - A unique constraint covering the columns `[contentHash]` on the table `Article` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Article_contentHash_key" ON "Article"("contentHash");
