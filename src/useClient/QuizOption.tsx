'use client';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer';
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
        <Toggle variant='outline'>{difficulty}</Toggle>
      ))}
    </div>
  );
}

// Quiz Length
// quiz tags
// quiz difficulty
// Quiz timer
// See if answer is correct or wrong

export default function QuizOption() {
  const QuizContext = useContext(QuizProgressContext);
  if (!QuizContext) {
    throw new Error(
      'QuizProgressContext must be used within a QuizProgressProvider'
    );
  }
  const { SET_TAGS, Tags } = QuizContext;

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
  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Select Options</DrawerTitle>
          <DrawerDescription className='flex justify-evenly'>
            <Tabs defaultValue='Options'>
              <TabsList>
                <TabsTrigger value='Options'>Quiz Options</TabsTrigger>
                <TabsTrigger value='Tags'>Quiz Tags</TabsTrigger>
              </TabsList>
              <TabsContent
                value='Options'
                className='flex flex-row justify-around'
              >
                <div className='flex justify-around'>
                  <DifficultyToggle />

                  <div className='flex items-center p-2'>
                    <Switch id='QuizTimer'></Switch>
                    <Label className='p-2' htmlFor='QuizTimer'>
                      Quiz Timer
                    </Label>
                  </div>
                </div>
              </TabsContent>

              {/* Render checkboxes for each tag  */}
              <TabsContent value='Tags'>
                {tagsList.map((tag) => (
                  <Toggle key={tag}  variant='outline' pressed={Tags.includes(tag)} onPressedChange={() => handleTagChange(tag)}>
                      {/* checked={Tags.includes(tag)}/ */}
                    <label htmlFor={tag}>{tag}</label>
                  </Toggle>
                ))}
              </TabsContent>
            </Tabs>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
