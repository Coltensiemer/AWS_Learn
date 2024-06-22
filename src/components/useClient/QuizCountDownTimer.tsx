'use client';

import React, { use, useContext, useEffect, useState } from 'react';
import { QuizProgressContext } from '../../useContext/QuizProgressContext';
import { Counter, CounterHeader, CounterTimer } from '../atomic/countDownTimer/countDownTimer';




export default function QuizCountDownTimer() {

  
  const QuizContext = useContext(QuizProgressContext);
  if (!QuizContext)
    throw new Error(
'useQuizProgressContext must be used within a QuizProgressProvider'
);
const { QuizTime } = QuizContext;


return (
  <div className='w-full pt-2'>
    {QuizTime ? 
      <Counter countDownValue={QuizTime}>
      </Counter>
      : null
    }
  </div>
);

}
