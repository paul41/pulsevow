-- AlterTable
ALTER TABLE "Source" ADD COLUMN     "sourceUrl" TEXT[] DEFAULT ARRAY[]::TEXT[];
