-- AlterTable
ALTER TABLE "ArticleAnalysis" ADD COLUMN     "neutralityScore" DOUBLE PRECISION,
ADD COLUMN     "sensationalismScore" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "OutletComparison" (
    "id" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,
    "outletName" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "sensationalism" DOUBLE PRECISION NOT NULL,
    "sentiment" "Sentiment" NOT NULL,
    "credibility" DOUBLE PRECISION NOT NULL,
    "biasDirection" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OutletComparison_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "OutletComparison_articleId_idx" ON "OutletComparison"("articleId");

-- CreateIndex
CREATE INDEX "OutletComparison_outletName_idx" ON "OutletComparison"("outletName");

-- AddForeignKey
ALTER TABLE "OutletComparison" ADD CONSTRAINT "OutletComparison_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;
