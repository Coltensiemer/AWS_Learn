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
import { useContext } from 'react';
import { QuizProgressContext } from '../app/useContext/QuizProgressContext';

interface QuizTrackerProps {
  currentQuestion: number | undefined;
  direction: string;
}



// THIS WORKS! BUT CURRENT QUESTION CHANGES BACK TO ZERO ON PAGE REFRESH.... 
function QuizNumberPageFoward({currentQuestion, direction,}: QuizTrackerProps) { 
  const PathName = usePathname();
  const lastSlashIndex = PathName.lastIndexOf('/');
  const CurrentPathName = PathName.substring(0, lastSlashIndex);
//If the current question number is defined, increment or decrement the current question number
  if (currentQuestion !== undefined && direction === "next") {
    const nextQuestionString = (currentQuestion + 1 ).toString();
    return `${CurrentPathName}/${nextQuestionString}`
  } else if (currentQuestion !== undefined && direction === "prev") {
    const PrevQuestionString = (currentQuestion  - 1).toString();
    return `${CurrentPathName}/${PrevQuestionString}`
  }
  else { 
    throw new Error("currentQuestion is undefined")
  }
}



export function PaginationDirection() {

  const QuizContext = useContext(QuizProgressContext);

  //testing to increment the current question, will need to creat a decrement function
  const { currentQuestion, incrementCurrentQuestion } = QuizContext!;

  /// Handle the next button click
  //Error: server is '0, client is '1'...
  const handleNextClick = () => {
    incrementCurrentQuestion();
  };


  // Generate URLs for previous and next questions
    const prevQuestionUrl = QuizNumberPageFoward({ currentQuestion, direction: 'prev'});
    const nextQuestionUrl = QuizNumberPageFoward({ currentQuestion, direction: 'next'});
     

  return (
    <Pagination>
      <PaginationContent>
        {currentQuestion !== undefined &&  currentQuestion >= 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious href={prevQuestionUrl}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>
              {currentQuestion != undefined && currentQuestion - 1 }
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink className='bg-blue-100' href='#' isActive>
          {currentQuestion}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  >
          {currentQuestion != undefined && currentQuestion + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext  href={nextQuestionUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
