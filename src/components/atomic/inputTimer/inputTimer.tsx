import * as React from "react";
import { cn } from "../../../../lib/utils";
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
  }, 
);

/// Add placeholder varient to inputVariants



export interface TimeInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
identifier: string;
inputSize?: VariantProps<typeof inputVariants>["inputSize"];
  }

	const TimeInput = React.forwardRef<HTMLDivElement, TimeInputProps>(
		({ className, identifier, inputSize = "default", ...props }, ref) => {

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        const isValidInput = /^\d*$/.test(value); // Check if value contains only digits
        const inputClassName = `w-10 text-xs ${isValidInput ? '' : ' border border-red-500'}`;
        e.target.className = inputClassName; 
        if (/^\d*$/.test(value) && value != undefined) { // Check if value contains only digits
          //@ts-ignore
          // This works because the parent component is passing the onChange prop
            props.onChange && props.onChange(value);
        }
      }

      return (
        <div className={className} ref={ref}>
          <label htmlFor={identifier}></label>
          <input
            id={identifier}
            value={props.value}
            onChange={handleChange}
            type="text"
            placeholder={identifier === 'min' ? 'Min' : 'Sec'}
            maxLength={identifier === 'min' ? 3 : 2}
            className='w-10 text-xs '
          />
        </div>
      );
    }
  );
  

TimeInput.displayName = 'TimeInput'; 

export { TimeInput, inputVariants };
