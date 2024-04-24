/*
  Warnings:

  - The primary key for the `CompletedQuiz` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `quiztimer` on the `CompletedQuiz` table. All the data in the column will be lost.
  - The primary key for the `QuizProgress` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `score` on the `QuizProgress` table. All the data in the column will be lost.
  - Added the required column `finishedAt` to the `CompletedQuiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentQuestion` to the `QuizProgress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CompletedQuiz" DROP CONSTRAINT "CompletedQuiz_pkey",
DROP COLUMN "quiztimer",
ADD COLUMN     "finishedAt" INTEGER NOT NULL,
ADD COLUMN     "quizDate" TIMESTAMP(3),
ADD COLUMN     "startTimer" INTEGER,
ADD COLUMN     "tags" TEXT[],
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "score" DROP NOT NULL,
ADD CONSTRAINT "CompletedQuiz_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CompletedQuiz_id_seq";

-- AlterTable
ALTER TABLE "QuizProgress" DROP CONSTRAINT "QuizProgress_pkey",
DROP COLUMN "score",
ADD COLUMN     "currentQuestion" INTEGER NOT NULL,
ADD COLUMN     "currentTimer" INTEGER,
ADD COLUMN     "tags" TEXT[],
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "QuizProgress_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "QuizProgress_id_seq";
