'use client';

import { Button } from '../components/ui/button';
import React, { useState, useContext, useEffect } from 'react';
import { QuizProgressContext } from '../useContext/QuizProgressContext';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';
import { Switch } from '../components/ui/switch';
import { Label } from '../components/ui/label';
import { Toggle } from '../components/ui/toggle';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { TimeInput } from '../components/ui/inputTimer';
import { convertToTotalSeconds } from '../functions/convertToTotalSeconds/convertToTotalSeconds';
import { QuestionTags } from '../QuestionTags';


function DifficultyToggle() {
  const difficultyList = ['Easy', 'Medium', 'Hard']; // Assuming this is your list of difficulty options
  const [selectedDifficulty, setSelectedDifficulty] = useState([]);

  // const handleToggle = (difficulty: string[]) => {
  //   if (selectedDifficulty.includes(difficulty)) {
  //     setSelectedDifficulty(selectedDifficulty.filter((d) => d !== difficulty));
  //   } else {
  //     setSelectedDifficulty([...selectedDifficulty, difficulty]);
  //   }
  // };
  return (
    <div>
      {difficultyList.map((difficulty) => (
        <Toggle key={difficulty} variant='outline'>
          {difficulty}
        </Toggle>
      ))}
    </div>
  );
}

// const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const value = e.target.value;
//   if (value > 24) {
//     // Do something
//   }

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
    <Card className='flex flex-col lg:flex-row'>
      <CardHeader>
        <CardTitle>Quiz Options</CardTitle>
        <CardDescription>Customize your quiz</CardDescription>
      </CardHeader>
      <Tabs defaultValue='Options'>
        <TabsList className='flex overflow-scroll'>
          <TabsTrigger value='Options'>Quiz Options</TabsTrigger>
          <TabsTrigger value='Tags'>Quiz Tags</TabsTrigger>
          <TabsTrigger value='Timer'>Timer</TabsTrigger>
        </TabsList>
        <TabsContent value='Options' className='flex flex-row justify-around'>
          <div className='flex justify-around'>
            <DifficultyToggle />
          </div>
        </TabsContent>

        {/* Render checkboxes for each tag  */}
        <TabsContent value='Tags'>
          {QuestionTags.map((tag) => (
            <Toggle
              key={tag}
              variant='outline'
              pressed={Tags.includes(tag)}
              onPressedChange={() => handleTagChange(tag)}
            >
              {/* checked={Tags.includes(tag)}/ */}
              <label htmlFor={tag}>{tag}</label>
            </Toggle>
          ))}
        </TabsContent>

        {/* //Quiz Timer */}
        <TabsContent value='Timer'>
          <div className='flex items-center p-2'>
            <div>
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
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        {!Tags.length && <p>No tags selected.</p>}
        <div>
          {Tags.map((tag, index) => (
            <ul key={index} className='grid grid-cols-2 grid-rows-1'>
              <li >{tag}</li>
            </ul>
          ))}
        </div>
        <div>
          {!QuizTime && <p>Timer is not set.</p>}
          {QuizTime && QuizTime > 1 && (
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
          )}
        </div>
      </Card>
    </Card>
  );
}
