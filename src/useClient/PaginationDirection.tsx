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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer';
import { Toggle } from '../components/ui/toggle';
import { Button } from '../components/ui/button';
import { useContext, useState } from 'react';
import { QuizProgressContext } from '../useContext/QuizProgressContext';
import { getNextorPrevIndex } from '../functions/getNextforPrevindex/getNextorPrevIndex';




export function PaginationDirection({
  currentIndex,
}: {
  currentIndex: number;
}) {
  const QuizContext = useContext(QuizProgressContext);
  const { currentQuestion } = QuizContext!;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  /// if the context is undefined return null, else get the next question id and the previous question id
  if (QuizContext === undefined) return null;
  const nextQuestionID = getNextorPrevIndex({
    currentQuestion: currentQuestion,
    quizList: QuizContext?.QuizList,
    direction: 'next',
  });
  const nextQuestion = () => QuizContext?.SET_CURRENT_QUESTION(nextQuestionID);

  const prevQuestionID = getNextorPrevIndex({
    currentQuestion: currentQuestion,
    quizList: QuizContext?.QuizList,
    direction: 'prev',
  });
  const prevQuestion = () => QuizContext?.SET_CURRENT_QUESTION(prevQuestionID);



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
    const quizId = QuizContext.QuizList[index]
    QuizContext.SET_CURRENT_QUESTION(quizId);
  }


  return (
    <div>
      <Pagination>
        <PaginationContent>
          {currentIndex !== undefined && currentIndex > 1 && (
            <>
              <PaginationItem>
                <PaginationPrevious onClick={prevQuestion} />
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            <PaginationLink className='bg-blue-100' href='#' isActive>
              {currentIndex}
            </PaginationLink>
          </PaginationItem>
          {currentIndex !== undefined &&
            currentIndex < QuizContext.QuizList.length && (
              <>
                <PaginationItem></PaginationItem>
                <PaginationItem>
                  <Drawer>
                    <DrawerTrigger>
                      <PaginationEllipsis onClick={openDrawer} />{' '}
                    </DrawerTrigger>
                  </Drawer>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext onClick={nextQuestion} />
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
                <Button onClick={() => goToSelectedQuestion(index - 1)} className='m-1' variant='default' key={index}>Question {index + 1}</Button>
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
