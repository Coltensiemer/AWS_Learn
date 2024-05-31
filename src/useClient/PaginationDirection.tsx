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
  // handleFormSubmit,
}: {
  currentIndex: number;
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
  /// Unable to get back to the FIRST QuESITON ' index is out of bounds' error***** 
  function goToSelectedQuestion(index: number) {
    // Need to update handFormSubmit to not handle the next direction
    // handleFormSubmit(index);
    if (QuizContext === undefined) return null;
    const quizId = QuizContext.QuizList[index + 1 ];
    const selectedIndex = QuizContext?.QuizList.indexOf(quizId);
    QuizContext.SET_CURRENT_QUESTION(selectedIndex) ;
  }


  const handleNextQuestion = (direction: string) => {
    // handleFormSubmit(direction)
    QuizContext.SET_QUIZ_DIRECTION(direction);
  } 



  const questionColor = (index: number) => {
    const quizId = QuizContext.QuizList[index];
    if (QuizContext.currentQuestion === index) {
      return 'current'
    }
    // Check if the index is in the 'incorrect' array
    if (QuizContext.Correct_Answered.includes(quizId)) {
      return 'correct';
    }
    // Check if the index is in the 'correct' array
    if (QuizContext.Incorrect_Answered.includes(quizId)) {
      return 'incorrect';
    }
    // If the index is not found in either array, return an empty string
    return 'neutral';
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
          {/* // This is the drawer component that is not working */}
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
                key={index +1}
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
