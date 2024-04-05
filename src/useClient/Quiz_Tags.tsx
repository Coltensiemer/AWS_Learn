'use client';
import React, { useState } from 'react';

// Define the list of tags
const tagsList = [
  'AWS Default',
  'Security',
  'VPC',
  'IAM',
  'S3',
  'EC2',
  // Add more tags here
];

export default function QuizTags() {
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
    <div>
      <h1>Quiz Tags</h1>
      <div>
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
      </div>
      {/* Display selected tags */}
      <div>
        <h2>Selected Tags:</h2>
        <ul>
          {selectedTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
