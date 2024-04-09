
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
  } from "../components/ui/drawer"; 
  import { Button } from "../components/ui/button"; 
  import React, {useState} from 'react'
  


  const tagsList = [
	'AWS Default',
	'Security',
	'VPC',
	'IAM',
	'S3',
	'EC2',
	// Add more tags here
  ];

  // Create a new tag list and import into the QuizOption component
  // Add the new tag to the tagsList array in the QuizTags component
  //Edit UI to display the new tag in the QuizTags component

  
  export default function QuizOption() {
	  
		const [selectedTags, setSelectedTags] = useState<string[]>([]);
	  
		// Function to handle tag selection/deselection
		const handleTagChange = (tag: string) => {
		  if (selectedTags.includes(tag)) {
			// Deselect tag
			setSelectedTags(
			  selectedTags.filter((selectedTag) => selectedTag !== tag)
			);
		  } else {
			// Select tag
			setSelectedTags([...selectedTags, tag]);
		  }
		};
	  return (
		  <Drawer>
		<DrawerTrigger>Open</DrawerTrigger>
		<DrawerContent>
		  <DrawerHeader>
			<DrawerTitle>Select tags to determind the question types.</DrawerTitle>
			<DrawerDescription>
        {/* Render checkboxes for each tag */}
        {tagsList.map((tag) => (
          <div key={tag}>
            <input
              type='checkbox'
              id={tag}
              checked={selectedTags.includes(tag)}
              onChange={() => handleTagChange(tag)}
            />
            <label htmlFor={tag}>{tag}</label>
          </div>
        ))}
			</DrawerDescription>
		  </DrawerHeader>
		  <DrawerFooter>
			<Button>Submit</Button>
			<DrawerClose>
			  <Button variant="outline">Cancel</Button>
			</DrawerClose>
		  </DrawerFooter>
		</DrawerContent>
	  </Drawer>
	)
  }
  