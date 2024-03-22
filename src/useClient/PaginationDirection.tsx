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
}







// THIS WORKS! BUT CURRENT QUESTION CHANGES BACK TO ZERO ON PAGE REFRESH.... 
function QuizNumberPageFoward(currentQuestion: number | undefined, direction: string) { 
  //This function will change the current question number
  //It will be called when the user clicks on the pagination links
  //It will change the current question number to the number of the link that was clicked

  const QuizContext = useContext(QuizProgressContext);

  const PathName = usePathname();
  //Find the index of the last occurrence of '/' character in the pathname.
  const lastSlashIndex = PathName.lastIndexOf('/');
  const CurrentPathName = PathName.substring(0, lastSlashIndex);
//If the current question number is defined, increment or decrement the current question number
  if (currentQuestion !== undefined && direction === "next") {
    currentQuestion = currentQuestion + 1;
    const nextQuestionString = currentQuestion.toString();
    return `${CurrentPathName}/${nextQuestionString}`
  } else if (currentQuestion !== undefined && direction === "prev") {
    currentQuestion = currentQuestion+ 1;
    const PrevQuestionString = currentQuestion.toString();
    return `${CurrentPathName}/${PrevQuestionString}`
  }
  else { 
    throw new Error("currentQuestion is undefined")
  }
}


export function PaginationDirection({ currentQuestion }: QuizTrackerProps) {


  return (
    <Pagination>
      <PaginationContent>
        {currentQuestion !== undefined &&  currentQuestion >= 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious
                href={`${QuizNumberPageFoward(currentQuestion, 'prev')}`}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`${QuizNumberPageFoward(currentQuestion, 'prev')}`}>
                {/* // {previousSlugString} */}
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
          <PaginationLink href={`${QuizNumberPageFoward(currentQuestion, 'next')}`}>
            {/* {nextSlugString}  */} 
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`${QuizNumberPageFoward(currentQuestion, 'next')}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
