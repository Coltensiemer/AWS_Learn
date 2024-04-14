'use client';

import React, { useContext, useState } from 'react';
import { QuizProgressContext } from '../useContext/QuizProgressContext';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const renderTime = ({ remainingTime }: { remainingTime: number }) => {
  if (remainingTime === 0 || remainingTime < 0) {
    return <div>End of Quiz</div>;
  }

  if (remainingTime > 60) {
    return <div className='flex flex-col justify-center items-center'>
      <div>{Math.floor(remainingTime) / 60}</div>
      <div>Min</div>
    </div>;
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
  const sizeforMintues = 80;
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
    </div>
  );
}
