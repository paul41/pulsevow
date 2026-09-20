-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_storyId_fkey";

-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "storyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "NewsStory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
