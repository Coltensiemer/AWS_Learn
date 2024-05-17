'use server';

import prisma from '../src/lib/prisma';

interface OptionType {
  id: number;
  value: string;
  iscorrect: boolean;
  quizId: number;
}

// Define the data type for the questions
export interface TableQuestionType {
  id: number;
  tag: string;
  sub_tag: string;
  question: string;
  correct_answer: string[];
  options: OptionType[];
}

export interface UserTableQuestionType {
  quizidused: number[];
  correct_answer: number[];
  incorrectanswer: number[];
  quizselectedoptions: any;
  tags: string[];
  score: number | null;
  starttimer: number | null;
  finishedat: number | null;
  quizDate: Date | null;
  questions: TableQuestionType[]
}

async function getFakeUserResults(sessionID: string) {
  /// make more effiecient
  /// take the most recent quiz

  const sessiondata = await prisma.fakeuser.findFirst({
    ///change so it only recieves the last quiz
    where: {
      cookieid: sessionID,
    },
    include: { completedquiz: true },
    take: 1,
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
    return data;
  } catch (error) {
    console.error(error);
    }
}

export async function getFakeUserTableResultData(cookieid: string) {
  try {
    const userQuizData = await getFakeUserResults(cookieid);

    if (!userQuizData) {
      return null;
    }

    const quizList = userQuizData.completedquiz[0].quizidused;

    const quizData = await getQuizList(quizList);

    if (!quizData) {
      return null;
    }
    const questiondata = quizData.map((quiz) => {
      return {
        id: quiz.id,
        tag: quiz.tag,
        sub_tag: quiz.sub_tag,
        question: quiz.question,
        correct_answer: quiz.correct_answer,
        options: quiz.options,
      };
     }) as TableQuestionType[];

  


    const completeQuizData: TableQuestionType[] = [
      ...questiondata,     
      
    ];

    return completeQuizData;

  } catch (error) {
    console.error(error);
    return null;
  }
}
