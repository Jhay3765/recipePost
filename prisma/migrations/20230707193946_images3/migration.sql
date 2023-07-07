/*
  Warnings:

  - You are about to drop the column `postId` on the `Image` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_postId_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "postId",
ALTER COLUMN "imageKey" DROP NOT NULL;
