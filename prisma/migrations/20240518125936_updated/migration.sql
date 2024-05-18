/*
  Warnings:

  - Made the column `quizselectedoptions` on table `completedquiz` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "completedquiz" ALTER COLUMN "quizselectedoptions" SET NOT NULL;
