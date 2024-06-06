'use client';
import React, { useContext, useState, useEffect } from 'react';
import { cn } from '../../../lib/utils';

export interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ className, asChild, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col space-y-1.5 p-6 bg-slate-400 border rounded-lg border-primary',
          className
        )}
        {...props}
      ></div>
    );
  }
);

Counter.displayName = 'Counter';

const CounterHeader = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
);

const CounterProgress = React.forwardRef<HTMLParagraphElement, CounterProps>(
  ({ className, ...props }, ref) => <div>{/* <Progress />  */}</div>
);

export { Counter, CounterHeader, CounterProgress };
