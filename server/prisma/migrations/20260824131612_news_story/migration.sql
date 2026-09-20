/*
  Warnings:

  - The values [INDUSTRY] on the enum `TagType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `rssUrl` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `articleId` on the `TimelineEvent` table. All the data in the column will be lost.
  - You are about to drop the column `articleId` on the `Trend` table. All the data in the column will be lost.
  - You are about to drop the `OutletComparison` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[storyId,sequence]` on the table `TimelineEvent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[storyId]` on the table `Trend` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `ArticleAnalysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storyId` to the `TimelineEvent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TimelineEvent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storyId` to the `Trend` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TagType_new" AS ENUM ('PERSON', 'COMPANY', 'ORGANIZATION', 'COUNTRY', 'CITY', 'STATE', 'POLITICIAN', 'TECHNOLOGY', 'PRODUCT', 'TOPIC', 'EVENT', 'CURRENCY', 'STOCK');
ALTER TABLE "Tag" ALTER COLUMN "type" TYPE "TagType_new" USING ("type"::text::"TagType_new");
ALTER TYPE "TagType" RENAME TO "TagType_old";
ALTER TYPE "TagType_new" RENAME TO "TagType";
DROP TYPE "public"."TagType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_parentId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_commentId_fkey";

-- DropForeignKey
ALTER TABLE "OutletComparison" DROP CONSTRAINT "OutletComparison_articleId_fkey";

-- DropForeignKey
ALTER TABLE "TimelineEvent" DROP CONSTRAINT "TimelineEvent_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Trend" DROP CONSTRAINT "Trend_articleId_fkey";

-- DropIndex
DROP INDEX "Article_slug_idx";

-- DropIndex
DROP INDEX "Notification_userId_idx";

-- DropIndex
DROP INDEX "TimelineEvent_articleId_idx";

-- DropIndex
DROP INDEX "Trend_articleId_key";

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "storyId" TEXT;

-- AlterTable
ALTER TABLE "ArticleAnalysis" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Source" DROP COLUMN "rssUrl";

-- AlterTable
ALTER TABLE "TimelineEvent" DROP COLUMN "articleId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "storyId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Trend" DROP COLUMN "articleId",
ADD COLUMN     "storyId" TEXT NOT NULL;

-- DropTable
DROP TABLE "OutletComparison";

-- CreateTable
CREATE TABLE "SourceFeed" (
    "id" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastFetchedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SourceFeed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsStory" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "status" "ArticleStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsStory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Industry" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Industry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoryIndustry" (
    "storyId" TEXT NOT NULL,
    "industryId" TEXT NOT NULL,
    "impactScore" DOUBLE PRECISION NOT NULL,
    "confidence" DOUBLE PRECISION,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StoryIndustry_pkey" PRIMARY KEY ("storyId","industryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "SourceFeed_url_key" ON "SourceFeed"("url");

-- CreateIndex
CREATE INDEX "SourceFeed_sourceId_idx" ON "SourceFeed"("sourceId");

-- CreateIndex
CREATE INDEX "SourceFeed_isActive_idx" ON "SourceFeed"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "NewsStory_slug_key" ON "NewsStory"("slug");

-- CreateIndex
CREATE INDEX "NewsStory_status_createdAt_idx" ON "NewsStory"("status", "createdAt");

-- CreateIndex
CREATE INDEX "NewsStory_createdAt_idx" ON "NewsStory"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Industry_slug_key" ON "Industry"("slug");

-- CreateIndex
CREATE INDEX "Industry_name_idx" ON "Industry"("name");

-- CreateIndex
CREATE INDEX "StoryIndustry_industryId_idx" ON "StoryIndustry"("industryId");

-- CreateIndex
CREATE INDEX "StoryIndustry_impactScore_idx" ON "StoryIndustry"("impactScore");

-- CreateIndex
CREATE INDEX "Article_storyId_idx" ON "Article"("storyId");

-- CreateIndex
CREATE INDEX "ArticleTag_tagId_idx" ON "ArticleTag"("tagId");

-- CreateIndex
CREATE INDEX "Category_name_idx" ON "Category"("name");

-- CreateIndex
CREATE INDEX "Comment_parentId_idx" ON "Comment"("parentId");

-- CreateIndex
CREATE INDEX "Notification_userId_isRead_idx" ON "Notification"("userId", "isRead");

-- CreateIndex
CREATE INDEX "SearchHistory_clickedArticleId_idx" ON "SearchHistory"("clickedArticleId");

-- CreateIndex
CREATE INDEX "TimelineEvent_storyId_idx" ON "TimelineEvent"("storyId");

-- CreateIndex
CREATE INDEX "TimelineEvent_storyId_eventDate_idx" ON "TimelineEvent"("storyId", "eventDate");

-- CreateIndex
CREATE UNIQUE INDEX "TimelineEvent_storyId_sequence_key" ON "TimelineEvent"("storyId", "sequence");

-- CreateIndex
CREATE UNIQUE INDEX "Trend_storyId_key" ON "Trend"("storyId");

-- AddForeignKey
ALTER TABLE "SourceFeed" ADD CONSTRAINT "SourceFeed_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "NewsStory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryIndustry" ADD CONSTRAINT "StoryIndustry_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "NewsStory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoryIndustry" ADD CONSTRAINT "StoryIndustry_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimelineEvent" ADD CONSTRAINT "TimelineEvent_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "NewsStory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trend" ADD CONSTRAINT "Trend_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "NewsStory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SearchHistory" ADD CONSTRAINT "SearchHistory_clickedArticleId_fkey" FOREIGN KEY ("clickedArticleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
