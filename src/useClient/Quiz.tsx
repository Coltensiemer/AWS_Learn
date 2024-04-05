'use client';

import React, { use, useContext, useEffect } from 'react';
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

// This is the schema that is used to validate the form data for the quiz.
const FormSchema = z.object({
  type: z.enum(['A', 'B', 'C', 'D']),
});

/// used to compare the answer to the correct answer
function compareAnswer(answer: string, correct_answer: string) {
  //return true if the answer is correct
  return answer === correct_answer;
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

  useEffect(() => {
    if (QuizContext && questions) {
      QuizContext.SET_QUIZ_LIST(questions.map((q) => q.id));
    }
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
    <>
    <QuizTracker currentIndex={currentIndex} /> 
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
    </>
    <PaginationDirection currentIndex={currentIndex + 1} /> 
    </>
  );
}

