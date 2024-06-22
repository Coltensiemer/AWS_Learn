'use client';

import { Button } from '../atomic/button/button';
import React, { useState, useContext, useEffect } from 'react';
import { QuizProgressContext } from '../../useContext/QuizProgressContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../atomic/tabs';
import { Switch } from '../atomic/switch';
import { Label } from '../atomic/label';
import { Toggle } from '../atomic/toggle';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../atomic/card/card';
import { TimeInput } from '../atomic/inputTimer/inputTimer';
import { convertToTotalSeconds } from '../../functions/convertToTotalSeconds/convertToTotalSeconds';
import { QuestionTags } from '../../QuestionTags';
import { Input } from '../atomic/input/input';
import { Checkbox } from '../atomic/checkbox/checkbox';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../atomic/tooltip';

// See if answer is correct or wrong

// Function to render time in minutes and seconds
const renderTime = (value: number, unit: string): string => {
  return value == 1 ? `${value} ${unit}` : `${value} ${unit}s`;
};

// Function to render minutes text
const renderMinutesText = (minutes: number): string => {
  return renderTime(minutes, 'minute');
};

// Function to render seconds text
const renderSecondsText = (seconds: number): string => {
  return renderTime(seconds, 'second');
};

export default function QuizOption() {
  const [TimeMinutes, setTimeMinutes] = useState<any>(60);
  const [TimeSeconds, setTimeSeconds] = useState<any>(0);
  const [quizLengthInput, setQuizLengthInput] = useState(60);
  const [QuizTimer, setQuizTimer] = useState(true);

  const QuizContext = useContext(QuizProgressContext);
  if (!QuizContext) {
    throw new Error(
      'QuizProgressContext must be used within a QuizProgressProvider'
    );
  }
  const {
    SET_TAGS,
    Tags,
    SET_QUIZ_TIME,
    QuizTime,
    SET_QUIZ_LENGTH,
    quizLength,
    SET_SHOW_ANSWERS,
    showAnswers,
  } = QuizContext;

  // Function to handle tag selection/deselection
  const handleTagChange = (tag: string) => {
    if (Tags.includes(tag)) {
      // Deselect tag
      SET_TAGS(Tags.filter((selectedTag) => selectedTag !== tag));
    } else {
      // Select tag
      SET_TAGS([...Tags, tag]);
    }
  };

  const resetAll = () => {
    setTimeMinutes(60);
    setTimeSeconds(0);
    setQuizTimer(true);
    SET_TAGS([]);
    SET_QUIZ_TIME(60);
    SET_QUIZ_LENGTH(60);
    SET_SHOW_ANSWERS(false);
  };

  useEffect(() => {
    const totalSeconds = convertToTotalSeconds(TimeMinutes, TimeSeconds);
    SET_QUIZ_TIME(totalSeconds);
  }, [TimeMinutes, TimeSeconds]);

  useEffect(() => {
    SET_QUIZ_LENGTH(quizLengthInput);
  }, [quizLengthInput]);

  return (
    <Card className='flex flex-col lg:flex-row h-96'>
      <CardHeader className='border'>
        <CardTitle>Quiz Options</CardTitle>
        <CardDescription>Customize your quiz</CardDescription>
      </CardHeader>
      <Tabs defaultValue='Options' className='overflow-scroll'>
        <TabsList className='flex overflow-scroll'>
          <TabsTrigger value='Tags'>Quiz Tags</TabsTrigger>
          <TabsTrigger value='Options'>Options</TabsTrigger>
        </TabsList>
        <TabsContent value='Tags' className='w-full flex flex-col'>
          {QuestionTags.map((tag, tagIndex) => (
            <Toggle
              variant='solid'
              pressed={Tags.includes(tag[0])}
              onPressedChange={() => handleTagChange(tag[0])}
              key={tagIndex}
            >
              <label htmlFor={tag[0]}>{tag[0]}</label>
            </Toggle>
          ))}
        </TabsContent>

        {/* //Quiz Timer */}
        <TabsContent value='Options' className='w-full'>
          <div className='flex flex-col  p-4 space-y-4'>
            <div className='flex items-center space-x-2'>
              <p>Quiz Length is</p>
              <Input
                className='w-24'
                maxLength={3}
                minLength={1}
                max={150}
                type='number'
                placeholder='Enter a Number'
                value={quizLength}
                onChange={(e) => SET_QUIZ_LENGTH(e.target.value)}
              />
            </div>

            <div className='justify-center flex items-center'>
              <Switch
                checked={QuizTimer}
                id='QuizTimer'
                onCheckedChange={() => setQuizTimer(!QuizTimer)}
              ></Switch>
              <Label className='p-2' htmlFor='QuizTimer'>
                Quiz CountDown Timer
              </Label>
            </div>
            {QuizTimer == true && (
              <div className='flex justify-center items-center'>
                <TimeInput
                  value={TimeMinutes}
                  inputSize={'sm'}
                  identifier='min'
                  onChange={(e) => {
                    setTimeMinutes(e);
                  }}
                />
                <span className='p-2'>:</span>
                <TimeInput
                  inputSize={'sm'}
                  identifier='sec'
                  onChange={(e) => {
                    setTimeSeconds(e);
                  }}
                />
              </div>
            )}
            <div className='flex m-4 justify-start items-center space-x-4'>
              <Checkbox
                onCheckedChange={() => SET_SHOW_ANSWERS(!showAnswers)}
                checked={showAnswers}
                id='checkbox'
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <label htmlFor='checkbox' className='text-xs hover:underline'>
                      Enable instant feedback on questions. 
                    </label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className='text-xs'>
                      Enable to show if your answer is correct or wrong. 
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Showing quiz options */}
      <Card className='w-96 sticky h-32 lg:h-full overflow-scroll border border-none bottom-20 lg:static'>
        <CardHeader>
          <Button onClick={resetAll} variant='ghost' className='w-24 text-xs'>
            Reset
          </Button>
        </CardHeader>

        <div className='flex flex-col items-center'>
          <div>
            <p>Your quiz will be {quizLength} long.</p>
          </div>
          {QuizTimer === true && QuizTime > 2 ? (
            <p>
              Timer is set for{' '}
              {TimeMinutes && TimeMinutes > 0
                ? renderMinutesText(TimeMinutes)
                : null}
              {TimeMinutes > 0 && TimeSeconds > 0 ? ' and ' : null}
              {TimeSeconds && TimeSeconds > 0
                ? renderSecondsText(TimeSeconds)
                : null}
              .
            </p>
          ) : null}

          <div className='flex flex-wrap justify-center'>
            {Tags.map((tag, index) => (
              <Toggle
                key={index}
                className='m-1'
                variant='outline'
                pressed={Tags.includes(tag)}
                onPressedChange={() => handleTagChange(tag)}
              >
                <label htmlFor={tag}>{tag}</label>
              </Toggle>
            ))}
          </div>
        </div>
      </Card>
    </Card>
  );
}
