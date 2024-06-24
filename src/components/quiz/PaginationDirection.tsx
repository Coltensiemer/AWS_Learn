'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../atomic/pagination';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../atomic/drawer/drawer';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,

} from '../atomic/tooltip';
import { Button } from '../atomic/button/button';
import { useContext, useEffect, useState } from 'react';
import { QuizProgressContext } from '../../useContext/QuizProgressContext';
import { nextQuestion } from '../../functions/nextQuestion/nextQuestion';



export function PaginationDirection({
  currentIndex,
  questions,
  // handleFormSubmit,
}: {
  currentIndex: number;
  questions: any;
  // handleFormSubmit: (data: any) => void;
}) {
  const QuizContext = useContext(QuizProgressContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  if (QuizContext === undefined) return null;

  // Drawer Functions
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Function to go to selected question
  function goToSelectedQuestion(index: number) {
    if (QuizContext === undefined) return null;
    const quizId = QuizContext.QuizList[index + 1];
    const selectedIndex = QuizContext?.QuizList.indexOf(quizId);
    QuizContext.SET_CURRENT_QUESTION(selectedIndex);
  }

  const handleNextQuestion = (direction: string) => {
    let nextId;
    if (direction === 'next') {
      nextId = nextQuestion(currentIndex, questions, 'next');
    } else if (direction === 'prev') {
      nextId = nextQuestion(currentIndex, questions, 'prev');
    }
    const nextIndex = QuizContext?.QuizList.indexOf(nextId);
    // Update current question ID in QuizContext
    QuizContext?.SET_CURRENT_QUESTION(nextIndex as number);
    // Check if it's the last question
    if (nextId === undefined || nextId === null) {
      return null;
    }
  };

  const questionColor = (index: number) => {
    
    const quizId = QuizContext.QuizList[index];
    if (QuizContext.currentQuestion === index) {
      return 'current';
    }
    // Check if the index is in the 'incorrect' array
    if (QuizContext.Correct_Answered.includes(quizId) && QuizContext.showAnswers) {
      return 'correct';
    }
    // Check if the index is in the 'correct' array
    if (QuizContext.Incorrect_Answered.includes(quizId) && QuizContext.showAnswers) {
      return 'incorrect';
    }

    if (QuizContext.Correct_Answered.includes(quizId) || QuizContext.Incorrect_Answered.includes(quizId)) {
      return 'isAnswered';
    }
    // If the index is not found in either array, return an empty string
    return 'neutral';
  };

  return (
    <div>
      <Pagination>
        <PaginationContent>
          {currentIndex !== undefined && currentIndex > 1 && (
            <>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handleNextQuestion('prev')}
                />
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            <PaginationLink className='bg-blue-100' href='#' isActive>
              {currentIndex}
            </PaginationLink>
          </PaginationItem>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <PaginationItem>
                  <Drawer>
                    <PaginationEllipsis onClick={openDrawer} />{' '}
                  </Drawer>
                </PaginationItem>
              </TooltipTrigger>
              <TooltipContent>
                <p className='text-xs'>See Quiz Progression</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* // This is the drawer component that is not working */}
          {currentIndex !== undefined &&
            currentIndex < QuizContext.QuizList.length && (
              <>
                <PaginationItem></PaginationItem>
                <PaginationItem>
                  <PaginationNext onClick={() => handleNextQuestion('next')} />
                </PaginationItem>
              </>
            )}
        </PaginationContent>
      </Pagination>

      {/* Drawer Component */}
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Select Question</DrawerTitle>
          </DrawerHeader>
          <DrawerDescription>
            {QuizContext.QuizList.map((quizItem, index) => (
              <Button
                onClick={() => goToSelectedQuestion(index - 1)}
                AnswerType={questionColor(index)}
                key={index + 1}
              >
                Question {index + 1}
              </Button>
            ))}
          </DrawerDescription>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button onClick={closeDrawer} variant='outline'>
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
