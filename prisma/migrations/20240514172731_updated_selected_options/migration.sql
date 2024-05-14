/*
  Warnings:

  - The `correct_answer` column on the `quiz` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "completedquiz" ADD COLUMN     "quizselectedoptions" JSONB;

-- AlterTable
ALTER TABLE "quiz" DROP COLUMN "correct_answer",
ADD COLUMN     "correct_answer" TEXT[];

-- AlterTable
ALTER TABLE "quizprogress" ADD COLUMN     "quizselectedoptions" JSONB;
