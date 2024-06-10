'use server';

import { object } from 'zod';
import prisma from '../src/lib/prisma';

// Define the data type for the questions
export interface TableQuestionType {
  id: number;
  tag: string;
  sub_tag: string;
  question: string;
  correct_answer: string[];
  options: OptionType[];
  userCorrect: boolean;
  userSelected: string | null;
}
export interface OptionType {
  value: string;
  iscorrect: boolean;
}

export interface UserTableQuestionType {
  quizidused: number[];
  correct_answer: number[];
  incorrectanswer: number[];
  quizselectedoptions: Record<number, string>;
  tags: string[];
  score: number | null;
  starttimer: number | null;
  finishedat: number | null;
  quizDate: Date | null;
}

export async function getFakeUserResults(sessionID: string) {
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
    const completedQuiz = userQuizData.completedquiz[0];
    const quizList = userQuizData.completedquiz[0].quizidused;

    const quizData = await getQuizList(quizList);

    if (!quizData) {
      return null;
    }
    
    //@ts-ignore
    const questiondata: TableQuestionType[] = quizData.map((quiz, index) => {
      const userCorrect = completedQuiz.correctanswers.some((answers, i) => {
        return answers === quiz.id;
      });



      // Transform the options to the format expected by the table for ColumnDef of react table
      const transformedOptions = quiz.options.map((option) => ({
        question: option.value,
        correct_answer: option.iscorrect,
      }));

      return {
        id: quiz.id,
        tag: quiz.tag,
        sub_tag: quiz.sub_tag,
        question: quiz.question,
        correct_answer: quiz.correct_answer,
        options: transformedOptions,
        userCorrect,
        //@ts-ignore
        userSelected: completedQuiz.quizselectedoptions[quiz.id] || 'No Answer Selected'
      };
    });

    return questiondata;
  } catch (error) {
    console.error(error);
    return null;
  }
}
