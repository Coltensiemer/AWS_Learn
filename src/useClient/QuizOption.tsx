'use client';

import { Button } from '../components/ui/button';
import React, { useState, useContext } from 'react';
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
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { TimeInput } from '../components/ui/stopwatch';

const tagsList = [
  'AWS Default',
  'Security',
  'VPC',
  'IAM',
  'S3',
  'EC2',
  // Add more tags here
];

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

export default function QuizOption() {
  const [QuizTimer, setQuizTimer] = useState(false);
const [timer, setTimer] = useState(0);
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

  const handleTimerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/;
    const value = e.target.value;
    if ( re.test(value)) {
    SET_QUIZ_TIME(parseInt(value));
    }
  };

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    alert(e.target.value);
  };
  return (
    <Card className='flex flex-row'>
      <CardHeader>
        <CardTitle>Quiz Options</CardTitle>
        <CardDescription>Customize your quiz</CardDescription>
      </CardHeader>
      <Tabs defaultValue='Options'>
        <TabsList>
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
          {tagsList.map((tag) => (
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
              <TimeInput
                onChange={(e) => {
                  handleTimerChange(e);
                }}
              />
            )}
            {/* For quiz timer: npm install react-countdown --save */}
          </div>
        </TabsContent>
      </Tabs>

    {/* Showing quiz options */}
      <Card>
        <CardHeader>
          <CardTitle>Selected Tags</CardTitle>
        </CardHeader>
        <div>
          {Tags.map((tag) => (
            <ul className='grid grid-cols-2 grid-rows-1'>
              <li key={tag}>{tag}</li>
            </ul>
          ))}
        </div>
        <div>
          {!QuizTime && <p>Timer is not set.</p>}
          {QuizTime && <p>Timer is set for {QuizTime} minutes.</p>}
        </div>
      </Card>
    </Card>
  );
}

