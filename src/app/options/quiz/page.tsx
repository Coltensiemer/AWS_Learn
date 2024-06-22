import react, { cache } from 'react';
import { Quiz } from '../../../components/quiz/Quiz';
import { QuizProps, QuestionType } from '../../../../prisma/dataTypes';
import prisma from '../../../lib/prisma';
import QuizCountDownTimer from '../../../components/quiz/QuizCountDownTimer';

async function GETQuiz(tags: string[], length: number,) {

  const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  }
  
  // When no tags are selected, return all questions
  if (!tags) {
    const data: QuestionType[] = await prisma.quiz.findMany({
      include: {
        options: true,
      },
      take: Number(length),
      skip: Math.floor(getRandomArbitrary(0, 10)),
    });
    return data;
  }

  let tagArray = Array.isArray(tags) ? tags : [tags];
  // When multiple tags are selected, filter questions by those tags
  const data: QuestionType[] = await prisma.quiz.findMany({
    where: {
      OR: tagArray.map((tag) => ({ tag })),
    },
    include: {
      options: true,
    },
  });
  return data;
}

//Caching GetQuiz to reduce request to the server
const QuizCache = GETQuiz;

export default async function Page({
  searchParams,
}: {
  searchParams: { tags: string[]; length: number };
}) {
  const response = await QuizCache(searchParams.tags, searchParams.length);

  return (
    <div className='flex flex-col'>
      <Quiz questions={response} />˛¸
      <QuizCountDownTimer />
    </div>
  );
}
