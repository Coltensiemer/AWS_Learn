'use client';

import React, { use, useContext, useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '../atomic/radio-group';
import { Label } from '../atomic/label';
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
} from '../atomic/form/form';
import { setCorrectorIncorrectQs } from '../../functions/setCorrectorIncorrectQs/setCorrectorIncorrectQs';
import { QuizProgressContext } from '../../useContext/QuizProgressContext';
import { QuizProps, QuestionType } from '../../../prisma/dataTypes';
import QuizTracker from '../useClient/QuizTracker';
import { PaginationDirection } from './PaginationDirection';
import { compareAnswer } from '../../functions/compareAnswers/compareAnswers';
import { QuizSubmit } from './QuizSubmitResults/QuizSubmitResults';
import { Card } from '../atomic/card/card';
import { Checkbox } from '../atomic/checkbox/checkbox';



// This is the schema that is used to validate the form data for the quiz.
export const FormSchema = z
.object({
  type: z.enum(['A', 'B', 'C', 'D', 'E']),
})
.required();

type OptionValue = z.infer<typeof FormSchema>['type'];

export function checkBoxes(value: OptionValue) {}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is the Quiz component that is exported to the page.
export function Quiz({ questions }: QuizProps) {
  const QuizContext = useContext(QuizProgressContext);

  useEffect(() => {
    //Sets the QuizList in the context to the list of questions
    if (QuizContext && questions) {
      QuizContext.SET_QUIZ_LIST(questions.map((q) => q.id));
    }
  }, []);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  if (!QuizContext) return null;
  if (!questions) return null;

  /// Get's the ID of the current question
  const currentQuestionID = QuizContext?.QuizList[QuizContext.currentQuestion];

  // To identify the last question in the array and change the button text to 'Submit'
  const currentIndex = QuizContext?.currentQuestion as number;

  const correct_answer = questions.find(
    (q) => q.id === currentQuestionID
  )?.correct_answer;
  if (correct_answer === undefined) return null;
  const isMutiple = correct_answer.length > 1;

  // This function is called when the form is submitted.
  function onSubmit() {
    const formData = form.getValues();
    if (!questions) {
      return;
    }
    if (QuizContext === null || QuizContext === undefined) return;
    // FormData.type is undefined, so the if statement is always true
    if (formData.type === undefined) {
      form.reset();
    } else {
      ///Checkes to see if the answer is correct,
      const correct_answer: string[] = questions.find(
        (q) => q.id === currentQuestionID
      )?.correct_answer as string[];

      //Compares and returns boolen value
      const isCorrect = compareAnswer(
        formData.type,
        correct_answer
      );
      //Updates the context with the correct or incorrect answer
      setCorrectorIncorrectQs(QuizContext, currentQuestionID, isCorrect);
      form.reset();
    }
  }



  return (
    <Card className='p-10'>
      <div className='flex  m-2'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex h-96 w-96'
          >
            <FormField
              control={form.control}
              name='type'
              render={({ field, formState: { errors } }) => {
                return (
                  <FormItem className='flex justify-around flex-col overflow-scroll mr-2'>
                    <div>
                      <FormLabel className='text-lg whitespace-normal break-normal'>
                        {
                          questions.find((q) => q.id === currentQuestionID)
                          ?.question
                          }
                      </FormLabel>
                    </div>
                    <FormControl>
                      {isMutiple ? (
                        <div className=''>
                          {/* /// This is the checkbox component - complete on submit with two or more values - edit layout */}
                          {questions
                            .find((q) => q.id === currentQuestionID)
                            ?.options.map((option, index) => {
                              return (
                                <div
                                key={index}
                                className='flex items-start space-x-2 p-2'
                                >
                                  <Checkbox
                                    className='h-5 w-5'
                                    checked={QuizContext.optionSelected[
                                      currentQuestionID
                                      ]?.includes(option.value[0])}
                                    value={option.value}
                                    onCheckedChange={(checked) => {
                                      const selectedValue = option.value[0];                                    
                                      QuizContext.SET_OPTION_SELECTED(
                                        {
                                          [currentQuestionID]: selectedValue, // Update the current question ID with the selected value
                                          },
                                        'checkbox'
                                        );          
                                        
                                        const newValue = checked
                                        ? [
                                          ...(field.value || []),
                                          selectedValue,
                                          ] // Add the selected value if checked
                                          //@ts-expect-error
                                          : (field.value || []).filter(
                                            (value: string) =>
                                              value !== selectedValue
                                            ); // Remove the selected value if unchecked
                                            
                                            // current bug. works unless three or more options are selected. QuizContext.optionSelected[currentQuestionID] is not updating 
                                            
                                            field.onChange([QuizContext.optionSelected[currentQuestionID],newValue]);
                                            onSubmit();  
                                            }}
                                    id={`r${index}`}
                                  />
                                  <Label htmlFor={`r${index}`}>
                                    {option.value}
                                  </Label>
                                </div>
                              );
                              })}
                        </div>
                      ) : (
                        <RadioGroup
                        value={
                          QuizContext.optionSelected[
                            currentQuestionID
                            ]?.[0] || ''
                            }
                            name='type'
                            onValueChange={(value) => {
                              //handle form change to auto update if correct or incorrect
                              const selectedValue = value || ''; 
                              
                              QuizContext.SET_OPTION_SELECTED(
                                {
                                  [currentQuestionID]: selectedValue[0],
                                  },
                                  'radio'
                                  );
                                  field.onChange(selectedValue);
                                  onSubmit();
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
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
                }}
            />
          </form>
        </Form>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <PaginationDirection
          currentIndex={currentIndex + 1}
          questions={questions}
        />
        <QuizTracker currentIndex={currentIndex} />
      </div>
      <QuizSubmit
        questions={questions}
        currentIndex={currentIndex}
        correct={QuizContext.Correct_Answered}
        incorrect={QuizContext.Incorrect_Answered}
        onSubmit={onSubmit}
      />
    </Card>
  );
}
