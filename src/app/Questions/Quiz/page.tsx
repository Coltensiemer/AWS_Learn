
import react, { cache } from 'react';
import { Quiz } from '../../../useClient/Quiz';
import {QuizProps, QuestionType} from '../../../../prisma/dataTypes';
import { PrismaClient } from '@prisma/client';


async function GETQuiz(tags: string[]) {
  const prisma = new PrismaClient();

//When no tags are selected, return all questions
  if (!tags) {
    const data: QuestionType[] = await prisma.quiz.findMany({
      include: {
        options: true,
      },
    });
    return data;
  }

  const data: QuestionType[] = await prisma.quiz.findMany({
    where: {
      /// edit the tags to filter the questions
      OR: tags.map(tag => ({ tag })),
    },
	include: {
	  options: true,
	},
  });
 return data;
}

//Caching GetQuiz to reduce request to the server
const QuizCache = cache(GETQuiz);

export default async function Page({ searchParams }: { searchParams: { tags: string[] } }) {

const response = await QuizCache(searchParams.tags) // Extract the actual data from the response object

  return (
    <div className='flex flex-col'>        
       <Quiz questions={response} />
    </div>
  );
}
