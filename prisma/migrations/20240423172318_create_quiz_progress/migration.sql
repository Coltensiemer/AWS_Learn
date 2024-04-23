-- CreateTable
CREATE TABLE "CompletedQuiz" (
    "id" SERIAL NOT NULL,
    "quizIDUsed" INTEGER[],
    "userId" TEXT,
    "correctAnswers" INTEGER[],
    "incorrectAnswers" INTEGER[],
    "score" INTEGER NOT NULL,
    "quiztimer" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompletedQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizProgress" (
    "id" SERIAL NOT NULL,
    "quizIDUsed" INTEGER[],
    "userId" TEXT,
    "correctAnswers" INTEGER[],
    "incorrectAnswers" INTEGER[],
    "score" INTEGER NOT NULL,
    "quiztimer" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuizProgress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CompletedQuiz" ADD CONSTRAINT "CompletedQuiz_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizProgress" ADD CONSTRAINT "QuizProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
