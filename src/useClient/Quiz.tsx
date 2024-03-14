import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
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

const FormSchema = z.object({
  type: z.enum(['A', 'B', 'C', 'D'], {
    required_error: 'The Answer selected is invalid. Please select a valid answer.',
  }),
});

// This is the Quiz component that is exported to the page.
export function Quiz({ questions, questionIndex }: QuizProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });


  function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = form.getValues();
    console.log("hello world", formData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
        <FormField
          control={form.control}
          name='type'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>{questions[questionIndex].question}</FormLabel>
              <FormControl>
                <RadioGroup defaultValue={field.value}
                onValueChange={field.onChange}>
                  {questions[questionIndex].options.map((option, index) => {
                    return (
                      <div key={index} className='flex items-center space-x-2'>
                        <RadioGroupItem
                          value={option.charAt(0).toUpperCase()}
                          id={`r${index}`}
                        />
                        <Label htmlFor={`r${index}`}>{option}</Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}

