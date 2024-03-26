'use client';

import React, { useContext } from 'react';
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
import { QuizProgressContext } from '../app/useContext/QuizProgressContext';

// This is the type definition for the questions that are passed to the Quiz component.
interface QuestionType {
  question: string;
  id: string;
  options: string[];
  correct_answer: string;
}
// This is the type definition for the props that are passed to the Quiz component.
interface QuizProps {
  questions: QuestionType[];
  questionID: string;
}

// This is the schema that is used to validate the form data for the quiz.
const FormSchema = z.object({
  type: z.enum(['A', 'B', 'C', 'D']),
});



/// used to compare the answer to the correct answer
function compareAnswer(answer: string, correctAnswer: string) {
  //return true if the answer is correct
  return answer === correctAnswer;
}

interface QuizIndexTrackerProps {
  currentQuestionIndex: number;
  quizList: string[];
  direction: string;
}

// Function to get the next or previous index based on the current index and the length of the quiz list.
function getNextorPrevIndex({
  currentQuestionIndex,
  quizList,
  direction,
}: QuizIndexTrackerProps) {
  
  if (currentQuestionIndex === null) {
    console.error('Current Index is undefined');
  }

  if (direction === 'next') {
    //Needs to take the current index and find the next index in the array
    const nextIndex = currentQuestionIndex + 1;
    const nextQuestion = quizList[nextIndex].toString();
    console.log(currentQuestionIndex, 'current index');
    console.log(nextIndex, 'next index');
    console.log(nextQuestion, 'next question');
  } else if (direction === 'prev') {
    //To go back
  } else {
    console.error('Error with next or prev index');
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is the Quiz component that is exported to the page.
export function Quiz({ questions, questionID }: QuizProps) {
  const QuizContext = useContext(QuizProgressContext);
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });


  function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = form.getValues();
    const question = questions.find((q) => q.id === questionID);
    if (!question) {
      console.error('Question not found');
      return;
    }

    const correctAnswer = question.correct_answer;

    /// for getNextorPrevIndex
    /// Error with currentQuestionIndex
    const currentQuestionIndex = QuizContext?.QuizList.findIndex(item => item.id === questionID);
    const quizList = QuizContext?.QuizList; 

    

    const isCorrect = compareAnswer(formData.type, correctAnswer);

    if (isCorrect) {

      router.push(getNextorPrevIndex({ currentQuestionIndex: currentQuestionIndex, quizList:quizList, direction: 'next' }));

    } else {
      console.log('to go next');
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
                    {questionID &&
                      questions.find((q) => q.id === questionID)?.question}
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      {questionID &&
                        questions
                          .find((q) => q.id === questionID)
                          ?.options.map((option, index) => {
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
