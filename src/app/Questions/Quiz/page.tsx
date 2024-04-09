
import react, { useEffect, useContext, useState, cache } from 'react';
import { QuizProgressContext } from '../../../useContext/QuizProgressContext';
import { Quiz } from '../../../useClient/Quiz';
// import {GET} from '../../api/get-quiz/route';
import {QuizProps, QuestionType} from '../../../../prisma/dataTypes';
import { PrismaClient } from '@prisma/client';


async function GETQuiz(tags: string[]) {
  console.log(tags, 'tags')
  const prisma = new PrismaClient();
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
  console.log(searchParams.tags, 'searchParams.tags')

const response = await QuizCache(searchParams.tags) // Extract the actual data from the response object

  return (
    <div className='flex flex-col'>
         {/* {searchParams.tags.map((post) => (
        <li key={post}>
          <p>{post}</p>
        </li>
      ))} */}
        
       <Quiz questions={response} />
    </div>
  );
}
