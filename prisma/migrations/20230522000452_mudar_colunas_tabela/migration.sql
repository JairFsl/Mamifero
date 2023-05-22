/*
  Warnings:

  - Added the required column `extinto` to the `Esquilo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Esquilo" ADD COLUMN     "extinto" BOOLEAN NOT NULL,
ALTER COLUMN "quantidadePatas" SET DEFAULT 4,
ALTER COLUMN "sexo" SET DATA TYPE TEXT;
