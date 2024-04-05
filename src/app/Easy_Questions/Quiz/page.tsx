
import react, { useEffect, useContext, useState } from 'react';
import { QuizProgressContext } from '../../../useContext/QuizProgressContext';
import { Quiz } from '../../../useClient/Quiz';
import QuizTracker from '../../../useClient/QuizTracker';
import { PaginationDirection } from '../../../useClient/PaginationDirection';
import {GET} from '../../../app/api/get-quiz/route';
import {QuizProps, QuestionType} from '../../../.././prisma/dataTypes';
import { PrismaClient } from '@prisma/client';


async function GETQuiz() {
  const prisma = new PrismaClient();
  const data: QuestionType[] = await prisma.quiz.findMany({
	where: {
	  tag: 'AWS',
	},
	include: {
	  options: true,
	},
  });
 return data;
}



export default async function Page() {



const data = await GETQuiz();  
  return (
    <div className='flex flex-col'>
      <Quiz questions={data} /> 
      {/* <PaginationDirection currentIndex={CurrentQuestion} /> */}
    </div>
  );
}
