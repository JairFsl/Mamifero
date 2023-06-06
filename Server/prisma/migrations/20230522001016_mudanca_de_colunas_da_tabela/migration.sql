/*
  Warnings:

  - You are about to drop the column `extinto` on the `Esquilo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Esquilo" DROP COLUMN "extinto",
ADD COLUMN     "hibernacao" BOOLEAN NOT NULL DEFAULT true;
