'use client';
import react, { useEffect, useContext, useState } from 'react';
import { QuizProgressContext } from '../../../useContext/QuizProgressContext';
import { Quiz } from '../../../useClient/Quiz';
import QuizTracker from '../../../useClient/QuizTracker';
import { PaginationDirection } from '../../../useClient/PaginationDirection';
import {GET_QUIZ} from '../../../app/api/get-quiz/route';
import {QuizProps, QuestionType} from '../../../.././prisma/dataTypes';





export default  function Page() {
  const QuizContext = useContext(QuizProgressContext);
  const [data, setData] = useState<QuestionType[] | null>(null); 

  // const data = await GET_QUIZ()

  if (!QuizContext) return null;
  const TotalQuestions = QuizContext?.QuizList.length || 0;
  const currentIndex = QuizContext?.QuizList.findIndex(
    (id: number) => id === QuizContext.currentQuestion
  );
  const CurrentQuestion = currentIndex + 1 || 1;
  
  return (
    <div className='flex flex-col'>
      <QuizTracker
        CurrentQuestion={CurrentQuestion}
        TotalQuestions={TotalQuestions}
      />

      <Quiz questions={data} /> 
      <PaginationDirection currentIndex={CurrentQuestion} />
    </div>
  );
}
