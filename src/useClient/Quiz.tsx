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
} from '../components/shadcn/form';
import { Button } from '../components/shadcn/button/button';
import { setCorrectorIncorrectQs } from '../functions/setCorrectorIncorrectQs/setCorrectorIncorrectQs';
import { QuizProgressContext } from '../useContext/QuizProgressContext';
import { QuizProps, QuestionType } from '../../prisma/dataTypes';
import QuizTracker from './QuizTracker';
import { PaginationDirection } from './PaginationDirection';
import { compareAnswer } from '../functions/compareAnswers/compareAnswers';
import { generateSessionId } from '../functions/generateSessionID/generateSessionID';
import {useRouter} from 'next/navigation';

// This is the schema that is used to validate the form data for the quiz.
export const FormSchema = z.object({
  type: z.enum(['A', 'B', 'C', 'D']),
});

const nextQuestion = (questionID: number, questions: QuestionType[]) => {
  const currentIndex = questions.findIndex((q) => q.id === questionID);
  if (currentIndex === -1) {
    return currentIndex; // if the question is not found return the current index
  } else {
    return questions[currentIndex].id;
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is the Quiz component that is exported to the page.
export function Quiz({ questions }: QuizProps) {
  const [sessionId, setSessionId] = useState('');
  const QuizContext = useContext(QuizProgressContext);
  const router = useRouter(); 
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});



  useEffect(() => {
    //Sets the QuizList in the context to the list of questions
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
    
    // Get the next question ID
    const nextId = nextQuestion(questionID, questions);
    console.log(nextId, 'nextId')
    // Update current question ID in QuizContext
    QuizContext?.SET_CURRENT_QUESTION(nextId);
  
    // Check if it's the last question
    if (nextId === undefined || nextId === null) {
      router.push('/Questions/Results');
    }
  }
console.log(QuizContext, 'quizcontext')

  return (
    <div className='h-{500} min-w-60 max-w-96 m-10 p-10  overflow-auto'>
        <div className='flex h-72 m-2'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='flex'
            >
              <FormField
                control={form.control}
                name='type'
                render={({ field }) => (
                  <FormItem className='flex justify-around flex-col overflow-scroll mr-2'>
                    <div>
                    <FormLabel className='text-lg whitespace-normal break-normal'>
                      {questions.find((q) => q.id === questionID)?.question}
                    </FormLabel>
                    </div>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        name='type'
                        onValueChange={field.onChange}
                        className='space-y-2'
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
      {currentIndex === QuizContext?.QuizList.length - 1 ? (
              // Render the "Submit" button when at the last question
              <Button className='flex self-end' type='submit'>
                Submit Quiz
              </Button>
            ) : (
              null
            )}
            </form>
        
          </Form>
        </div>
      <div className='flex flex-col justify-center items-center'>
        <PaginationDirection  currentIndex={currentIndex + 1} handleFormSubmit={onSubmit} />
        <QuizTracker currentIndex={currentIndex} />
      </div>
    </div>
  );
}
