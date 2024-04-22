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
import {useRouter} from 'next/navigation';

// This is the schema that is used to validate the form data for the quiz.
const FormSchema = z.object({
  type: z.enum(['A', 'B', 'C', 'D']),
});

const nextQuestion = (questionID: number, questions: QuestionType[]) => {
  const currentIndex = questions.findIndex((q) => q.id === questionID);
  if (currentIndex === -1) {
    return currentIndex; // if the question is not found return the current index
  } else {
    return questions[currentIndex + 1].id;
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is the Quiz component that is exported to the page.
export function Quiz({ questions }: QuizProps) {
  const [sessionId, setSessionId] = useState('');
  const QuizContext = useContext(QuizProgressContext);
  const router = useRouter(); 
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});

  const handleOptionChange = (quizId: string, optionValue: string) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [quizId]: optionValue,
    }));
  };

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
    
    if (QuizContext != undefined && currentIndex === QuizContext?.QuizList.length - 1) {
      router.push('/Questions/Results');
    }
    else { 
      const nextId = nextQuestion(questionID, questions);
      QuizContext?.SET_CURRENT_QUESTION(nextId);

    } 

    //Create a function that routes pages to a Dashboard with the results
    // information from context will need to be pushed to a server
    
  }
console.log(QuizContext, 'quizcontext')

  return (
    <div className='h-{500} min-w-60 max-w-96 p-10 border border-black-900 overflow-auto'>
        <div className='flex h-72 flex-col justify-start items-center mb-10 border-green-300 border'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-6'
            >
              <FormField
                control={form.control}
                name='type'
                render={({ field }) => (
                  <FormItem className='space-y-3'>
                    <FormLabel className='text-lg whitespace-normal break-normal'>
                      {questions.find((q) => q.id === questionID)?.question}
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        name='type'
                        onValueChange={field.onChange}
                      >
                        {questions
                          .find((q) => q.id === questionID)
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
              <Button  size='sm' type='submit'>
                {Submitbutton}
              </Button>
            </form>
          </Form>
        </div>
      <div className='flex flex-row justify-center items-center'>
        <PaginationDirection currentIndex={currentIndex + 1} />
        <QuizTracker currentIndex={currentIndex} />
      </div>
    </div>
  );
}
