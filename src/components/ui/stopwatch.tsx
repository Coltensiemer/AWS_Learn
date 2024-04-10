import * as React from "react";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";


const inputVariants = cva(
  "border border-gray-300 rounded-md p-2",
  {
    variants: {
      inputSize: {
        default: "w-32",
        sm: "w-24",
        md: "w-36",
        lg: "w-48",
      },
    },
    defaultVariants: {
      inputSize: "default",
    },
  }
);





export interface TimeInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}
	
	const TimeInput = React.forwardRef<HTMLDivElement, TimeInputProps>(
		({ className, inputSize = "default", ...props }, ref) => {
		  return (
			<div className={cn(inputVariants({ inputSize, className }))} ref={ref}>
        <label htmlFor="time"></label>
			  <input id="time" value={props.value} onChange={props.onChange} type="text" placeholder="Mintues" maxLength={3} className='w-24' />
			</div>
		  );
		}
	  );
	  TimeInput.displayName = "TimeInput";


TimeInput.displayName = "TimeInput";




export { TimeInput, inputVariants };
