'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../components/shadcn/pagination';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../components/shadcn/drawer/drawer';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/shadcn/tooltip';

import { Button } from '../components/shadcn/button/button';
import { useContext, useEffect, useState } from 'react';
import { QuizProgressContext } from '../useContext/QuizProgressContext';


export function PaginationDirection({
  currentIndex,
  handleFormSubmit,
}: {
  currentIndex: number;
  handleFormSubmit: (data: any) => void;
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
  /// Unable to get back to the FIRST QuESITON ' index is out of bounds' error***** 
  function goToSelectedQuestion(index: number) {
    if (QuizContext === undefined) return null;
    const quizId = QuizContext.QuizList[index];
    QuizContext.SET_CURRENT_QUESTION(quizId);
  }


  // is the function to handle the next question
  // CURRENT BUG, HandleFORMSumbit does not update in time to get the correct index
  const handleNextQuestion = (direction: string) => {
    console.log(direction, 'direction in pagination')
    handleFormSubmit(direction)
    QuizContext.SET_QUIZ_DIRECTION(direction);
  } 

  

  const questionColor = (index: number) => {

    if (QuizContext.currentQuestion === index) {
      return 'bg-white-500 m-1 border b-4 border-blue-500';
    }
    // Check if the index is in the 'incorrect' array
    if (QuizContext.Correct_Answered.includes(index)) {
      return 'border b-4 border-green-500 m-1';
    }
    
    // Check if the index is in the 'correct' array
    if (QuizContext.Incorrect_Answered.includes(index)) {
      return ' border b-4 border-red-500 m-1';
    }
  
    // If the index is not found in either array, return an empty string
    return 'm-1';
  }

  

  

  return (
    <div>
      <Pagination>
        <PaginationContent>
          {currentIndex !== undefined && currentIndex > 1 && (
            <>
              <PaginationItem>
                <PaginationPrevious onClick={() => handleNextQuestion('prev')} />
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
                    <DrawerTrigger>
                      <PaginationEllipsis onClick={openDrawer} />{' '}
                    </DrawerTrigger>
                  </Drawer>
                </PaginationItem>
              </TooltipTrigger>
              <TooltipContent>
                <p className='text-xs'>See Quiz Progression</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
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
                className = {questionColor(index)}
                variant='default'
                key={index}
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
