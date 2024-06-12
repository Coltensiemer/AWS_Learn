'use client';

import React, { useEffect, useState } from 'react';
import { CountDownProgress } from '../progress/progress';
import { cn } from '../../../lib/utils';

export interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
  countDownValue?: number;
  countDown?: boolean;
}

const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ className, asChild, countDownValue = 100, ...props }, ref) => {
    const [currentValue, setCurrentValue] = useState(countDownValue);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentValue((prevValue) => Math.max(prevValue - 1, 0));
      }, 1000);
      return () => clearInterval(interval);
    }, [countDownValue]);

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col space-y-1.5 p-6 bg-foreground border rounded-lg border-primary',
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
      className={cn('flex flex-col space-y-1.5 p-2', className)}
      {...props}
    />
  )
);

CounterHeader.displayName = 'CounterHeader';

const CounterTimer = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ className, countDownValue, ...props }, ref) => {
    return (
      <div ref={ref}>
        {countDownValue === 0 ? <p>Time is Over</p> : <p>{countDownValue}</p>}
      </div>
    );
  }
);

CounterTimer.displayName = 'CounterTimer';

const CounterProgress = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ className, countDownValue = 100, countDown = false, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-col space-y-1.5', className)}>
        <CountDownProgress value={countDownValue} countdown={countDown} />
      </div>
    );
  }
);

CounterProgress.displayName = 'CounterProgress';

export { Counter, CounterHeader, CounterProgress, CounterTimer };
