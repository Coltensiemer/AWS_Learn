/*
  Warnings:

  - You are about to drop the `CompletedQuiz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Option` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Quiz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuizProgress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompletedQuiz" DROP CONSTRAINT "CompletedQuiz_userId_fkey";

-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_quizId_fkey";

-- DropForeignKey
ALTER TABLE "QuizProgress" DROP CONSTRAINT "QuizProgress_userId_fkey";

-- DropTable
DROP TABLE "CompletedQuiz";

-- DropTable
DROP TABLE "Option";

-- DropTable
DROP TABLE "Quiz";

-- DropTable
DROP TABLE "QuizProgress";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fakeuser" (
    "id" TEXT NOT NULL,
    "cookieid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fakeuser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quiz" (
    "id" SERIAL NOT NULL,
    "tag" TEXT NOT NULL,
    "sub_tag" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "correct_answer" TEXT NOT NULL,

    CONSTRAINT "quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "option" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "iscorrect" BOOLEAN NOT NULL,
    "quizId" INTEGER NOT NULL,

    CONSTRAINT "option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "completedquiz" (
    "id" TEXT NOT NULL,
    "quizidused" INTEGER[],
    "userId" TEXT,
    "cookieid" TEXT,
    "correctanswers" INTEGER[],
    "incorrectanswers" INTEGER[],
    "tags" TEXT[],
    "score" INTEGER,
    "starttimer" INTEGER,
    "finishedat" INTEGER NOT NULL,
    "quizDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "completedquiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quizprogress" (
    "id" TEXT NOT NULL,
    "quizidused" INTEGER[],
    "userId" TEXT,
    "correctanswers" INTEGER[],
    "incorrectanswers" INTEGER[],
    "tags" TEXT[],
    "currentquestion" INTEGER NOT NULL,
    "currenttimer" INTEGER,
    "quiztimer" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quizprogress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "fakeuser_cookieid_key" ON "fakeuser"("cookieid");

-- AddForeignKey
ALTER TABLE "option" ADD CONSTRAINT "option_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "completedquiz" ADD CONSTRAINT "completedquiz_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "completedquiz" ADD CONSTRAINT "completedquiz_cookieid_fkey" FOREIGN KEY ("cookieid") REFERENCES "fakeuser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizprogress" ADD CONSTRAINT "quizprogress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
