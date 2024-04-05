/*
  Warnings:

  - You are about to drop the column `correctAnswer` on the `Quiz` table. All the data in the column will be lost.
  - Added the required column `correct_answer` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "correctAnswer",
ADD COLUMN     "correct_answer" TEXT NOT NULL;
