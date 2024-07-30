'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '../../../../lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const levelVariants = cva('transition-all', {
  variants: {
    level: {
      full: 'bg-green-500',
      quarter: 'bg-yellow-500',
      nearEmpty: 'bg-red-500',
      Empty: 'bg-black-500',
    },
    backgroundColor: {
      Default: 'border-primary',
      Empty: 'border-red-500 border',
    },
  },
});

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number;
  countdown?: boolean;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, countdown = false, ...props }, ref) => {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full border bg-green-500',
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn('h-full w-full flex-1 transition-all')}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

Progress.displayName = ProgressPrimitive.Root.displayName;








const CountDownProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, countdown = false, ...props }, ref) => {
  let level: 'full' | 'quarter' | 'nearEmpty' | 'Empty' = 'full';
  let backgroundColor: 'Default' | 'Empty' = 'Default';
  if (value === 0) {
    backgroundColor = 'Empty';
  } else if (value && value <= 10) {
    level = 'nearEmpty';
  } else if (value && value <= 25) {
    level = 'quarter';
  }

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-2 w-full overflow-hidden  rounded-full border',
        levelVariants({ backgroundColor }),
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          'h-full w-full flex-1 transition-all',
          levelVariants({ level })
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
CountDownProgress.displayName = ProgressPrimitive.Root.displayName;

export { CountDownProgress };
