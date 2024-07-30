'use client';

import React, { useEffect, useState, useContext } from 'react';
import { QuizProgressContext } from '../../../useContext/QuizProgressContext';
import { CountDownProgress } from '../progress/progress';
import { cn } from '../../../../lib/utils';
import { convertToMinutesAndSeconds } from '../../../functions/converToMinutesAndSecond/convertToMinutesAndSecond';

const renderTime = (remainingTime: number) => {
  if (remainingTime === 0 || remainingTime < 0) {
    return <div>End of Quiz</div>;
  }

  const { minutes, seconds } = convertToMinutesAndSeconds(remainingTime);

  if (minutes > 0) {
    return (
      <div className='flex flex-col text-xs justify-center items-center'>
        <div className='flex flex-row space-x-1'>
          <p>{minutes}</p>
          <p className='text-xs'>Minutes</p>
          <p>{seconds}</p>
          <p className='text-xs'>Seconds</p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <p>{seconds}</p>
      <p className='text-xs'>Seconds</p>
    </div>
  );
};

export interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
  countDownValue?: number;
  countDown?: boolean;
}

const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ className, asChild, countDownValue = 100, ...props }, ref) => {
    const [currentValue, setCurrentValue] = useState<number>(countDownValue);
    const QuizContext = useContext(QuizProgressContext);

  if (QuizContext === undefined) throw new Error('QuizProgressContext is undefined');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue((prevValue) => Math.max(prevValue - 1, 0));
      }, 1000);
      return () => clearInterval(interval);
    }, [countDownValue]);


    //included 
    useEffect(() => {
      QuizContext.SET_QUIZ_TIME(currentValue);
    }, [currentValue, QuizContext]);

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col space-y-1.5 bg-foreground border rounded-lg border-primary',
          className
        )}
        {...props}
      >
        <div className='flex flex-col justify-center items-center'>
          <CounterHeader>{props.children}</CounterHeader>
          <CounterTimer countDownValue={currentValue} />
        </div>
        <CounterProgress countDownValue={currentValue} />
      </div>
    );
  }
);

Counter.displayName = 'Counter';

const CounterHeader = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5', className)}
      {...props}
    />
  )
);

CounterHeader.displayName = 'CounterHeader';

const CounterTimer = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ className, countDownValue, ...props }, ref) => {
    return <div ref={ref}>{renderTime(countDownValue || 0)}</div>;
  }
);

CounterTimer.displayName = 'CounterTimer';

const CounterProgress = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ className, countDownValue = 100, countDown = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 px-4 py-2', className)}
      >
        <CountDownProgress value={countDownValue} countdown={countDown} />
      </div>
    );
  }
);

CounterProgress.displayName = 'CounterProgress';

export { Counter, CounterHeader, CounterProgress, CounterTimer };