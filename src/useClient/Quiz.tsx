'use client';

import React, { use, useContext } from 'react';
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

import { PaginationDirection } from './PaginationDirection';
import { QuizProgressContext } from '../app/useContext/QuizProgressContext';
import { getNextorPrevIndex } from '../functions/getNextforPrevindex/getNextorPrevIndex';

// This is the type definition for the questions that are passed to the Quiz component.
interface QuestionType {
  question: string;
  id: number;
  options: string[];
  correct_answer: string;
}
// This is the type definition for the props that are passed to the Quiz component.
interface QuizProps {
  questions: QuestionType[];
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

const nextQuestion = (questionID: number, questions: QuestionType[]) => {
  const currentIndex = questions.findIndex((q) => q.id === questionID);
  if (currentIndex === -1) {
    return currentIndex; // if the question is not found return the current index
  } else {
    console.log(questions[currentIndex + 1].id, 'next question');
    return questions[currentIndex + 1].id;
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is the Quiz component that is exported to the page.
export function Quiz({ questions }: QuizProps) {
  const QuizContext = useContext(QuizProgressContext);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  if (!QuizContext) return null;
  // Defaults to the first question in the array until the QuizContext is available for currentQuestion
  const questionID =
    QuizContext?.QuizList[QuizContext.currentQuestion] ||
    QuizContext?.currentQuestion;

  // To identify the last question in the array and change the button text to 'Submit'
  const currentIndex = questions.findIndex((q) => q.id === questionID);
  const Submitbutton =
    currentIndex === QuizContext?.QuizList.length - 1 ? 'Submit' : 'Next';

  // This function is called when the form is submitted.
  function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = form.getValues();
    if (!questions) {
      console.error('Question not found');
      return;
    }
    const correctAnswer: string = questions.find((q) => q.id === questionID)
      ?.correct_answer as string;
    const isCorrect = compareAnswer(formData.type, correctAnswer);

    if (isCorrect) {
    } else {
      console.log('Incorrect Answer');
    }
    const nextId = nextQuestion(questionID, questions);
    QuizContext?.SET_CURRENT_QUESTION(nextId);

    //Create a function that routes pages to a Dashboard with the results
    // information from context will need to be pushed to a server

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
                    {questions.find((q) => q.id === questionID)?.question}
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      {questions
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
              {Submitbutton}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
