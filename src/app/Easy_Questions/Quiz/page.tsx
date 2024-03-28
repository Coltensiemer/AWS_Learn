
"use client";
import react, { useEffect, useContext } from 'react';
import { QuizProgressContext } from '../../useContext/QuizProgressContext'
import { EasyQA } from '../../../Data';
import { Quiz } from '../../../useClient/Quiz';
import QuizTracker from '../../../useClient/QuizTracker';
import { PaginationDirection } from '../../../useClient/PaginationDirection';


export default function Page() {
  
  const QuizContext = useContext(QuizProgressContext);
  useEffect(() => {
    if(QuizContext) 
    // SET_QUIZ_LIST is a function that takes an array of question IDs
  QuizContext.SET_QUIZ_LIST(EasyQA.map((question) => question.id));
},[])

if (!QuizContext) return null;
const TotalQuestions = QuizContext?.QuizList.length  || EasyQA.length;
const currentIndex = QuizContext?.QuizList.findIndex((id: number) => id === QuizContext.currentQuestion);
const CurrentQuestion = currentIndex + 1 || 1;






  return (
    <div className='flex flex-col'>
      <QuizTracker CurrentQuestion={CurrentQuestion} TotalQuestions={TotalQuestions}/>
      <Quiz questions={EasyQA} />
      {/* <PaginationDirection /> */}
    </div>
  );
}


