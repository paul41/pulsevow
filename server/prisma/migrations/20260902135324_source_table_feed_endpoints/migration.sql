/*
  Warnings:

  - You are about to drop the column `sourceUrl` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `Source` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[siteUrl]` on the table `Source` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `siteUrl` to the `Source` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Source_website_key";

-- AlterTable
ALTER TABLE "Source" DROP COLUMN "sourceUrl",
DROP COLUMN "website",
ADD COLUMN     "feedEndpoints" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "siteUrl" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Source_siteUrl_key" ON "Source"("siteUrl");
