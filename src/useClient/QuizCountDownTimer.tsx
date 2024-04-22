'use client';

import React, { useContext, useState } from 'react';
import { QuizProgressContext } from '../useContext/QuizProgressContext';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Quiz } from './Quiz';

const renderTime = ({ remainingTime }: { remainingTime: number }) => {
  if (remainingTime === 0 || remainingTime < 0) {
    return <div>End of Quiz</div>;
  }

  if (remainingTime >= 60) {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return (
      <div className='flex flex-col text-xs justify-center items-center'>
        <p>{minutes}</p>
        <p className='text-xs'>Minutes</p>
        <p>{seconds}</p>
        <p className='text-xs'>Seconds</p>
      </div>
    )
  }

  if (remainingTime <= 60) {
    return (
      <div className='flex flex-col justify-center items-center'>
        <div>{remainingTime}</div>
      </div>
    );
  }
};

export default function QuizCountDownTimer() {
  const sizeforMintues = 120;
  const sizeforSeconds = 120;

  
  const QuizContext = useContext(QuizProgressContext);
  if (!QuizContext)
    throw new Error(
'useQuizProgressContext must be used within a QuizProgressProvider'
);
const { QuizTime } = QuizContext;
const theSize = QuizTime <= 60 ? sizeforSeconds : sizeforMintues;
return (
  <div>
    {QuizTime ? (
      <CountdownCircleTimer
        size={theSize}
        isPlaying
        duration={QuizTime}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: false })}
      >
        {renderTime}
      </CountdownCircleTimer>
    ) : null}
  </div>
);
}
