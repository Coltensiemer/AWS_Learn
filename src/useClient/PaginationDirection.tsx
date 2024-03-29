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
import {  useContext } from 'react';
import { QuizProgressContext } from '../app/useContext/QuizProgressContext';
import { getNextorPrevIndex } from '../functions/getNextforPrevindex/getNextorPrevIndex';

export function PaginationDirection({currentIndex}: {currentIndex: number }) {

const QuizContext = useContext(QuizProgressContext);
const { currentQuestion } = QuizContext!;


/// if the context is undefined return null, else get the next question id and the previous question id
if(QuizContext === undefined) return null;
const nextQuestionID = getNextorPrevIndex({currentQuestion: currentQuestion, quizList: QuizContext?.QuizList, direction: 'next'});
const nextQuestion = () =>  QuizContext?.SET_CURRENT_QUESTION(nextQuestionID);

const prevQuestionID = getNextorPrevIndex({currentQuestion: currentQuestion, quizList: QuizContext?.QuizList, direction: 'prev'});
const prevQuestion = () =>  QuizContext?.SET_CURRENT_QUESTION(prevQuestionID);





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
