import React, { createContext, useContext, useState, ReactNode } from 'react';


export interface QuizProgressContextType { 
  correctAnswers: number;
  incorrectAnswers: number;
  totalQuestions: number;
  currentQuestion: number 
  incrementCorrectAnswers: () => void;
  incrementIncorrectAnswers: () => void;
  incrementCurrentQuestion: () => void;
} 

//Create a context to store the quiz progress data
export const QuizProgressContext = createContext<QuizProgressContextType | undefined>(undefined);

//interface for children of the QuizProgressProvider
interface QuizProgressProviderProps {
  children: ReactNode;
}


export const QuizProgressProvider = ({ children }: QuizProgressProviderProps ) => {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  
  const incrementCorrectAnswers = () => {
    setCorrectAnswers(prevCount => prevCount + 1);
  };

  const incrementIncorrectAnswers = () => {
    setIncorrectAnswers(prevCount => prevCount + 1);
  };

  const incrementCurrentQuestion = () => {
    setCurrentQuestion(prevCount => prevCount + 1);
    console.log("incrementing current question")
  }

  return (
    <QuizProgressContext.Provider value={{ correctAnswers, incorrectAnswers, incrementCorrectAnswers, incrementIncorrectAnswers, currentQuestion, incrementCurrentQuestion, totalQuestions }}>
      {children}
    </QuizProgressContext.Provider>
  );
};