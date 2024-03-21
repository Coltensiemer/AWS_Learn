import React from 'react';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
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
} from '../components/ui/form';
import { Button } from '../components/ui/button';
import { useRouter, useParams } from 'next/navigation';
import { PaginationDirection } from './PaginationDirection';


// This is the type definition for the questions that are passed to the Quiz component.
interface QuestionType {
  question: string;
  options: string[];
  correct_answer: string;
}
// This is the type definition for the props that are passed to the Quiz component.
interface QuizProps {
  questions: QuestionType[];
  questionIndex: number;
}

// This is the schema that is used to validate the form data for the quiz.
const FormSchema = z.object({
  type: z.enum(['A', 'B', 'C', 'D']),
});

// This is the Quiz component that is exported to the page.
export function Quiz({ questions, questionIndex }: QuizProps) {
  const router = useRouter();
  const params = useParams<{ slug: string }>();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function compareAnswer(answer: string, correctAnswer: string) {
    //return true if the answer is correct
    return answer === correctAnswer;
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = form.getValues();
    const correctAnswer = questions[questionIndex].correct_answer;
    const isCorrect = compareAnswer(formData.type, correctAnswer);
    if (isCorrect) {
      //if the answer is correct, increment the slug number and navigate to the next question
      const currentSlugNumber = parseInt(params.slug);
      const nextSlug = currentSlugNumber + 1;
      const nextSlugString = nextSlug.toString();
      router.push(nextSlugString);
    }
    else { 

    }
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center  mb-10 '>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full space-y-6'
          >
            <FormField
              control={form.control}
              name='type'
              render={({ field }) => (
                <FormItem className='space-y-3'>
                  <FormLabel className='text-lg'>
                    {questions[questionIndex].question}
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      {questions[questionIndex].options.map((option, index) => {
                        return (
                          <div
                            key={index}
                            className='flex items-center space-x-2'
                          >
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
            <Button size='sm' type='submit'>
              Submit
            </Button>
          </form>
        </Form>
      </div>
      <PaginationDirection />
    </>
  );
}
