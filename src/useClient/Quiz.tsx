'use client';

import React, { use, useContext, useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '../components/shadcn/radio-group';
import { Label } from '../components/shadcn/label';
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
} from '../components/shadcn/form/form';
import { Button } from '../components/shadcn/button/button';
import { setCorrectorIncorrectQs } from '../functions/setCorrectorIncorrectQs/setCorrectorIncorrectQs';
import { QuizProgressContext } from '../useContext/QuizProgressContext';
import { QuizProps, QuestionType } from '../../prisma/dataTypes';
import QuizTracker from './QuizTracker';
import { PaginationDirection } from './PaginationDirection';
import { compareAnswer } from '../functions/compareAnswers/compareAnswers';
import { useRouter } from 'next/navigation';
import { nextQuestion } from '../functions/nextQuestion/nextQuestion';
import { collectGenerateParams } from 'next/dist/build/utils';

// This is the schema that is used to validate the form data for the quiz.
export const FormSchema = z.object({
  type: z.enum(['A', 'B', 'C', 'D']),
}).required(); 

type OptionValue = z.infer<typeof FormSchema>['type'];



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is the Quiz component that is exported to the page.
export function Quiz({ questions }: QuizProps) {
  const [sessionId, setSessionId] = useState('');
  const QuizContext = useContext(QuizProgressContext);
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: OptionValue;
  }>({});
 

  const handleOptionChange = (questionID: any, value: any) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionID]: value,
    });
  };

  useEffect(() => {
    //Sets the QuizList in the context to the list of questions
    if (QuizContext && questions) {
      QuizContext.SET_QUIZ_LIST(questions.map((q) => q.id));
    }
  }, []);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });

  if (!QuizContext) return null;
  if (!questions) return null;
  
/// Get's the ID of the current question
  const currentQuestionID =
    QuizContext?.QuizList[QuizContext.currentQuestion]

  // To identify the last question in the array and change the button text to 'Submit'
  const currentIndex = QuizContext?.currentQuestion as number;
  
  // This function is called when the form is submitted.
  function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = form.getValues();
    if (!questions) {
      return;
    }

    // FormData.type is undefined, so the if statement is always true
    if (formData.type === undefined) {
      form.reset();
    }
    else {
      ///Checkes to see if the answer is correct, 
          const correct_answer: string = questions.find((q) => q.id === currentQuestionID)
            ?.correct_answer as string;
      //Compares and returns boolen value
            const isCorrect = compareAnswer(formData.type, correct_answer);
      /// If it goes into incorrect first, it will not go into correct ************ 
          setCorrectorIncorrectQs(QuizContext, currentQuestionID, isCorrect);
      
          form.reset();
    }

    
  // Determine the next or previous question ID based on the direction
  let nextId;
  let direction = QuizContext?.Direction;
  console.log(direction, 'direction first Quiz.tsx')
  if (direction === 'next') {
    nextId = nextQuestion(currentIndex, questions, 'next');
  } else if (direction === 'prev') {
    nextId = nextQuestion(currentIndex, questions, 'prev');
  }
const nextIndex = QuizContext?.QuizList.indexOf(nextId);
  // Update current question ID in QuizContext
  QuizContext?.SET_CURRENT_QUESTION(nextIndex as number);


    // Check if it's the last question
    if (nextId === undefined || nextId === null) {
      router.push('/Questions/Results');
    }
  }

  // console.log(QuizContext, 'QuizContext')
  
  return (
    <div className='h-{500} min-w-60 max-w-96 m-10 p-10  overflow-auto'>
      <div className='flex h-72 m-2'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex'>
            <FormField
              control={form.control}
              name='type'
              render={({ field, formState: {errors} }) => (
                <FormItem className='flex justify-around flex-col overflow-scroll mr-2'>
                  <div>
                    <FormLabel className='text-lg whitespace-normal break-normal'>
                      {questions.find((q) => q.id === currentQuestionID)?.question}
                    </FormLabel>
                  </div>
                  <FormControl>
                    <RadioGroup
                      value={selectedOptions[currentQuestionID] || ''}
                      name='type'
                      onValueChange={(value) => {
                        const selectedValue = value || ""; // If value is undefined or null, use an empty string
                        handleOptionChange(currentQuestionID, selectedValue as OptionValue);
                        /// 
                        field.onChange(selectedValue);
                      }}
                       
                      className='space-y-2'
                    >
                       {errors.type && <p>{errors.type.message}</p>}
                      {questions
                        .find((q) => q.id === currentQuestionID)
                        ?.options.map((option, index) => {
                          return (
                            <div
                              key={index}
                              className='flex items-start space-x-2'
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
          </form>
        </Form>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <PaginationDirection
          currentIndex={currentIndex + 1}
          handleFormSubmit={onSubmit}
          />
        <QuizTracker currentIndex={currentIndex} />
      </div>
          {currentIndex === QuizContext?.QuizList.length - 1 ? (
            // Render the "Submit" button when at the last question
            <div className='flex'>
            <Button  type='submit'>
              Submit Quiz
            </Button>
            </div>
          ) : null}
    </div>
  );
}
