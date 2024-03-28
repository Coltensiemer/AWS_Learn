'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../components/ui/pagination';
import { useParams, usePathname } from 'next/navigation';
import { use, useContext } from 'react';
import { QuizProgressContext } from '../app/useContext/QuizProgressContext';
import { getNextorPrevIndex } from '../functions/getNextforPrevindex/getNextorPrevIndex';
interface QuizTrackerProps {
  currentQuestion: number | undefined;
  direction: string;
}



// // THIS WORKS! BUT CURRENT QUESTION CHANGES BACK TO ZERO ON PAGE REFRESH.... 
// function QuizNumberPageFoward({currentQuestion, direction,}: QuizTrackerProps) { 
//   const PathName = usePathname();
//   const lastSlashIndex = PathName.lastIndexOf('/');
//   const CurrentPathName = PathName.substring(0, lastSlashIndex);
// //If the current question number is defined, increment or decrement the current question number
//   if (currentQuestion !== undefined && direction === "next") {
//     const nextQuestionString = (currentQuestion + 1 ).toString();
//     return `${CurrentPathName}/${nextQuestionString}`
//   } else if (currentQuestion !== undefined && direction === "prev") {
//     const PrevQuestionString = (currentQuestion  - 1).toString();
//     return `${CurrentPathName}/${PrevQuestionString}`
//   }
//   else { 
//     throw new Error("currentQuestion is undefined")
//   }
// }



export function PaginationDirection({currentIndex}: {currentIndex: number }) {

  const QuizContext = useContext(QuizProgressContext);

  //testing to increment the current question, will need to creat a decrement function
  const { currentQuestion } = QuizContext!;

console.log(currentIndex)

if(QuizContext === undefined) return null;

//starting off, current question is 0. This tossing an error because the index is out of bounds
//need to fix this

const nextQuestionID = getNextorPrevIndex({currentQuestion: currentQuestion, quizList: QuizContext?.QuizList, direction: 'next'});
const nextQuestion = () =>  QuizContext?.SET_CURRENT_QUESTION(nextQuestionID);

const prevQuestionID = getNextorPrevIndex({currentQuestion: currentQuestion, quizList: QuizContext?.QuizList, direction: 'prev'});
const prevQuestion = () =>  QuizContext?.SET_CURRENT_QUESTION(prevQuestionID);

// Boolen if the current number is the first index

const isFirstIndex = QuizContext.currentQuestion === 0 



  return (
    <Pagination>
      <PaginationContent>
        {currentIndex !== undefined && currentIndex > 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious onClick={prevQuestion} />
            </PaginationItem>
            <PaginationItem>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink className='bg-blue-100' href='#' isActive>
          {currentIndex}
          </PaginationLink>
        </PaginationItem>
        { currentIndex !== undefined && currentIndex < QuizContext.QuizList.length   && (
          <>
          <PaginationItem>
          <PaginationLink  >
          {currentIndex != undefined && currentIndex + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={nextQuestion}   />
        </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
}
