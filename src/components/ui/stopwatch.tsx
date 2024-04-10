import * as React from "react";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {Control, useForm} from "react-hook-form";

const inputVariants = cva(
  "border border-gray-300 rounded-md p-2",
  {
    variants: {
      inputSize: {
        default: "w-28",
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
			  <input type="text" placeholder="Mintues" maxLength={2} className="w-24" />
			</div>
		  );
		}
	  );
	  TimeInput.displayName = "TimeInput";


TimeInput.displayName = "TimeInput";




export { TimeInput, inputVariants };
