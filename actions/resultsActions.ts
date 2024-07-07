'use server';

import prisma from '../lib/prisma';

async function getUserResults(sessionID: string) {


  const sessiondata = await prisma.user.findFirst({
    ///change so it only recieves the last quiz
    where: {
      id: sessionID,
    },
    include: { completedquiz: true },
    orderBy: {
      createdAt: 'desc',
    },
    ///exclude some data from the query
  });

  return sessiondata;
}

async function getQuizList(quizidused: number[] | undefined) {
  // Fetch the Questions used in the quiz
  try {
    if (quizidused === undefined) {
      return null;
    }
    const data = await prisma.quiz.findMany({
      where: {
        id: { in: quizidused },
      },
      include: { options: true },
    });
    console.log(data)
  } catch (error) {
    console.error(error);
  }
}

export async function getTableResultData(cookieid: string) {
  try {
    const userQuizData = await getUserResults(cookieid);
	
    if (!userQuizData) {
      return null;
    }

    const QuizList = userQuizData.completedquiz[0].quizidused;
		

		const quizData = await getQuizList(QuizList);
    if (!quizData) {
      return null;
    }

    const completeQuizData: any = {
      ...userQuizData,
        questions: quizData,
    };

  } catch (error) {
    console.error(error);
    return null;
  }
}


