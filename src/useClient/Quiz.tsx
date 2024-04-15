'use client';

import React, { use, useContext, useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { array, set, z } from 'zod';
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
import { setCorrectorIncorrectQs } from '../functions/setCorrectorIncorrectQs/setCorrectorIncorrectQs';
import { QuizProgressContext } from '../useContext/QuizProgressContext';
import { QuizProps, QuestionType } from '../../prisma/dataTypes';
import QuizTracker from './QuizTracker';
import { PaginationDirection } from './PaginationDirection';
import { compareAnswer } from '../functions/compareAnswers/compareAnswers';
import { generateSessionId } from '../functions/generateSessionID/generateSessionID';

// This is the schema that is used to validate the form data for the quiz.
const FormSchema = z.object({
  type: z.enum(['A', 'B', 'C', 'D']),
});

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
  const [sessionId, setSessionId] = useState('');
  const QuizContext = useContext(QuizProgressContext);

  useEffect(() => {
    //Sets the QuizList in the context to the list of questions
    if (QuizContext && questions) {
      QuizContext.SET_QUIZ_LIST(questions.map((q) => q.id));
    }

    //sets the session ID in local storage
    // const storedSessionId = localStorage.getItem('sessionId');
    // if (storedSessionId) {
    //   setSessionId(storedSessionId);
    // } else {
    //   // If session ID doesn't exist, generate a new one and store it
    //   const newSessionId = generateSessionId();
    //   setSessionId(newSessionId);
    //   localStorage.setItem('sessionId', newSessionId);
    // }
  }, []);
  // console.log(QuizContext);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  if (!QuizContext) return null;
  if (!questions) return null;
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
      return;
    }

    ///Checkes to see if the answer is correct
    const correct_answer: string = questions.find((q) => q.id === questionID)
      ?.correct_answer as string;

    const isCorrect = compareAnswer(formData.type, correct_answer);
    setCorrectorIncorrectQs(QuizContext, questionID, isCorrect);
    const nextId = nextQuestion(questionID, questions);
    QuizContext?.SET_CURRENT_QUESTION(nextId);

    //Create a function that routes pages to a Dashboard with the results
    // information from context will need to be pushed to a server
  }

  return (
    <div>
      <div className='max-w-sm w-full overflow-auto border-red-300 border'>
        <div className='flex flex-col justify-center items-center mb-10 border-green-300 border'>
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
                                  value={option.value[0]}
                                  id={`r${index}`}
                                />
                                <Label htmlFor={`r${index}`}>
                                  {option.value}
                                </Label>
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
      </div>
      <div className='flex flex-row justify-center items-center'>
        <PaginationDirection currentIndex={currentIndex + 1} />
        <QuizTracker currentIndex={currentIndex} />
      </div>
    </div>
  );
}
