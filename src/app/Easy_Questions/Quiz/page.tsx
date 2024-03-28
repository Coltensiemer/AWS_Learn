
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
// if (QuizContext)
// QuizContext.SET_CURRENT_QUESTION(EasyQA[0].id);
},[])

//Progam needs a questionID to display the question
//it can default to first item  in Quiz data array
// if(!QuizContext) return null;
// const questionID = QuizContext?.QuizList[QuizContext.currentQuestion];





  return (
    <div className='flex flex-col'>
      {/* <QuizTracker /> */}
      <Quiz questions={EasyQA} />
      {/* <PaginationDirection /> */}
    </div>
  );
}


