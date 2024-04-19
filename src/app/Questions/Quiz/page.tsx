
import react, { cache } from 'react';
import { Quiz } from '../../../useClient/Quiz';
import {QuizProps, QuestionType} from '../../../../prisma/dataTypes';
import { PrismaClient } from '@prisma/client';
import {GET} from '../../api/get-quiz/route'; 

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


/// Get this to use get-quiz
// const GETQuiz = async (tags: string[]) => {
//   try {
//     // Construct the query string with the 'tags' parameter
    
//     const response = await fetch(`/api/get-quiz/${queryString}`); // Include the query string in the URL

//     if (response.ok) {
//       const data: QuestionType[] = await response.json();
//       return data;
//     } else {
//       throw new Error('Failed to fetch data');
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };




//Caching GetQuiz to reduce request to the server
const QuizCache = cache(GETQuiz);

export default async function Page({ searchParams }: { searchParams: { tags: string[] } }) {

  const response = await QuizCache(searchParams.tags);

  




  return (
    <div className='flex flex-col'>        
       <Quiz questions={response} />
    </div>
  );
}
