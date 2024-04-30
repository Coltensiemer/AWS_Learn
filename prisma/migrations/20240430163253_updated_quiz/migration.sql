/*
  Warnings:

  - Added the required column `sub_tag` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "sub_tag" TEXT NOT NULL;
