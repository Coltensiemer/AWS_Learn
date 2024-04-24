import fs from 'fs'; // File system module
import prisma from '../src/lib/prisma';

/// This creates a user with the email for seed data
async function main() {
  try {
    //Delete all users to clear the database
    await prisma.user.deleteMany();
    await prisma.completedQuiz.deleteMany();
    await prisma.quizProgress.deleteMany();

    await prisma.user.upsert({
      where: { email: 'alice@prisma.io' },
      update: {},
      create: {
        email: 'alice@prisma.io',
        name: 'Alice',
        password: 'password',
        CompletedQuiz: {
          create: {
            quizIDUsed: [1, 2, 3, 4, 5, 6],
            correctAnswers: [1, 3, 5],
            incorrectAnswers: [2, 4, 6],
            tags: ['EC2', 'Lambda'],
            score: 50,
            startTimer: 120,
            finishedAt: 20,
            quizDate: new Date(),
          },
        },
        QuizProgress: {
          create: {
            quizIDUsed: [1, 2, 3, 4, 5, 6],
            correctAnswers: [1, 3],
            incorrectAnswers: [2, 4],
            currentQuestion: 5,
            quiztimer: 42,
            tags: ['EC2', 'Lambda'],
          },
        },
      },
    });

  

    //Delete all quizzes, options and questions to clear the database
    await prisma.option.deleteMany();
    await prisma.quiz.deleteMany();

    const jsonData = fs.readFileSync('src/Data.ts', 'utf8');
    const data = JSON.parse(jsonData);

    for (const item of data) {
      await prisma.quiz.create({
        data: {
          tag: item.tag,
          question: item.question,
          correct_answer: item.correct_answer,
          options: {
            create: item.options.map((option: any) => ({
              value: option.value,
              isCorrect: option.isCorrect, // Set isCorrect based on the value field of each option
            })),
          },
        },
      });
    }
  } catch (error) {
    throw error;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
