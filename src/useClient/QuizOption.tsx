'use client';

import { Button } from '../components/shadcn/button/button';
import React, { useState, useContext, useEffect } from 'react';
import { QuizProgressContext } from '../useContext/QuizProgressContext';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/shadcn/tabs';
import { Switch } from '../components/shadcn/switch';
import { Label } from '../components/shadcn/label';
import { Toggle } from '../components/shadcn/toggle';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/shadcn/card/card';
import { TimeInput } from '../components/shadcn/inputTimer';
import { convertToTotalSeconds } from '../functions/convertToTotalSeconds/convertToTotalSeconds';
import { QuestionTags } from '../QuestionTags';
import { ScrollArea } from '@radix-ui/react-scroll-area';

// }
// Quiz Length
// quiz tags
// quiz difficulty
// Quiz timer
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
  const [TimeMinutes, setTimeMinutes] = useState<any>(0);
  const [TimeSeconds, setTimeSeconds] = useState<any>(0);
  const [QuizTimer, setQuizTimer] = useState(false);
  const QuizContext = useContext(QuizProgressContext);
  if (!QuizContext) {
    throw new Error(
      'QuizProgressContext must be used within a QuizProgressProvider'
    );
  }
  const { SET_TAGS, Tags, SET_QUIZ_TIME, QuizTime } = QuizContext;

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

  useEffect(() => {
    const totalSeconds = convertToTotalSeconds(TimeMinutes, TimeSeconds);
    SET_QUIZ_TIME(totalSeconds);
  }, [TimeMinutes, TimeSeconds]);

  return (
    <Card className='flex flex-col lg:flex-row h-96'>
      <CardHeader>
        <CardTitle>Quiz Options</CardTitle>
        <CardDescription>Customize your quiz</CardDescription>
      </CardHeader>
      <Tabs defaultValue='Options' className='overflow-scroll'>
        <TabsList className='flex overflow-scroll'>
          <TabsTrigger value='Tags'>Quiz Tags</TabsTrigger>
          <TabsTrigger value='Options'>Options</TabsTrigger>
        </TabsList>
        <TabsContent value='Tags' className='w-96 flex flex-col'>
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
        <TabsContent value='Options' className='w-96'>
          <div className='flex flex-col items-center p-2'>
            <div className='justify-center flex items-center'>
              <Switch
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
          </div>
        </TabsContent>
      </Tabs>

      {/* Showing quiz options */}
      <Card className='w-96 sticky h-32 lg:h-full overflow-scroll  bottom-20 lg:static lg:border-l-2 border-gray-500'>
        <CardHeader></CardHeader>
        <div>
          {!QuizTime && <p>Timer is not set.</p>}
          {QuizTime && QuizTime > 2 ? (
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
          {!Tags.length && <p>No tags selected.</p>}
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
