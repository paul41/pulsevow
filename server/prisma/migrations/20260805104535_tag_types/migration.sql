-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "TagType" ADD VALUE 'ORGANIZATION';
ALTER TYPE "TagType" ADD VALUE 'CITY';
ALTER TYPE "TagType" ADD VALUE 'STATE';
ALTER TYPE "TagType" ADD VALUE 'POLITICIAN';
ALTER TYPE "TagType" ADD VALUE 'PRODUCT';
ALTER TYPE "TagType" ADD VALUE 'INDUSTRY';
ALTER TYPE "TagType" ADD VALUE 'CURRENCY';
ALTER TYPE "TagType" ADD VALUE 'STOCK';
