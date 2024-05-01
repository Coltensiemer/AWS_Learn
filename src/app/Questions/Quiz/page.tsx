import react, { cache } from 'react';
import { Quiz } from '../../../useClient/Quiz';
import { QuizProps, QuestionType } from '../../../../prisma/dataTypes';
import prisma from '../../../lib/prisma';
import { generateCookieID } from '../../../functions/generateSessionID/generateCookieID';
import { cookies } from 'next/headers';
import { getSession, createCookie } from '../../../../lib';




async function GETQuiz(tags: string[]) {
  // When no tags are selected, return all questions
  if (!tags) {
    const data: QuestionType[] = await prisma.quiz.findMany({
      include: {
        options: true,
      },
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
const QuizCache = cache(GETQuiz);

export default async function Page({
  searchParams,
}: {
  searchParams: { tags: string[] };
}) {
  const response = await QuizCache(searchParams.tags);
  const session = await getSession();

  // createCookie();

  return (
    <div className='flex flex-col'>
      <Quiz questions={response} />

    </div>
  );
}
