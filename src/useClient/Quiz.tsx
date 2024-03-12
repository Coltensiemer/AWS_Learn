import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label"; 
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"; 
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from '@/components/ui/button';

interface QuestionType {
  question: string;
  options: string[];
  correct_answer: string;
}

interface QuizProps {
  questions: QuestionType[];
  questionIndex: number;
}

interface RadioGroupDemoProps {
  options: string[];
}

const FormSchema = z.object({
  type: z.enum(["A", "B", "C", "D"], {
    required_error: "You need to select a notification type.",
  }),
})

export function RadioGroupForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
} 


const handleDataSubmit: SubmitHandler<z.infer<typeof FormSchema>> = (formData) => {
  console.log(formData);
};
  

export function RadioGroupDemo({ options }: RadioGroupDemoProps) {
 

  return (
    <RadioGroup defaultValue="">
      {options.map((option, index) => {

        return (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`r${index}`}  />
            <Label htmlFor={`r${index}`}>{option}</Label>
          </div>
        );
      })}
    </RadioGroup>
  );
}


// This is the Quiz component that is exported to the page. 
export function Quiz({ questions, questionIndex }: QuizProps) {
  

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
  } = useForm({defaultValues: {radio:''}});
  
  

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <div>
        {questions[questionIndex] && (
          <div key={questionIndex}>
            <h2>{questions[questionIndex].question}</h2>
            <RadioGroupDemo options={questions[questionIndex].options} {...register("radio")} />
          </div>
        )}
      </div>
    <Button  type="submit">Submitt</Button>
    </form>
  );
};






