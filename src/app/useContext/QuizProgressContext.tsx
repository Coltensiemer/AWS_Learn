'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
  useReducer,
} from 'react';

import {
  QuizinitialState,
  QuizReducer,
  ActionType,
} from '../useReducer/QuizProgressReducer';

export interface QuizProgressContextType {
  correctAnswers: number;
  incorrectAnswers: number;
  currentQuestion: number;
  QuizList: [];
  incrementCorrectAnswers: () => void;
  incrementIncorrectAnswers: () => void;
  incrementCurrentQuestion: () => void;
  SET_QUIZ_LIST: (payload: any) => void;
}

//Create a context to store the quiz progress data
export const QuizProgressContext = createContext<
  QuizProgressContextType | undefined
>(undefined);

//interface for children of the QuizProgressProvider
interface QuizProgressProviderProps {
  children: ReactNode;
}



///QuizProgressProvider 
export const QuizProgressProvider = ({
  children,
}: QuizProgressProviderProps) => {
  const [state, dispatch] = useReducer(QuizReducer, QuizinitialState);

  const SET_QUIZ_LIST = (payload: any) => {
    dispatch({ type: ActionType.SET_QUIZ_LIST, payload });
  };

  const incrementCorrectAnswers = () => {
    dispatch({ type: ActionType.INCREMENT_CORRECT_ANSWERS });
  };

  const incrementIncorrectAnswers = () => {
    dispatch({ type: ActionType.INCREMENT_INCORRECT_ANSWERS });
  };

  // When this function is called, the useEffect hook will be triggered and the current question will be incremented
  const incrementCurrentQuestion = () => {
    dispatch({ type: ActionType.INCREMENT_CURRENT_QUESTION });
  };

  useEffect(() => {
    // Set the current question in local storage    
      // Ensure state.currentQuestion is not null before converting to string
      if (state.currentQuestion !== null) {
        // Set the current question in local storage
        localStorage.setItem('currentQuestion', state.currentQuestion.toString());
      }
    
  }, [state.currentQuestion]);

  useEffect(() => { 
    if (state.QuizList !== null && state.QuizList !== undefined) {
      /// This is being set as a string of the array... NEED TO FIX
    localStorage.setItem('QuizListIDS', state.QuizList);
    } 
  },[state.QuizList])

  // when is this acivated, the localstorage is set to null
  // useEffect(() => {
  //   if (state.QuizList === null || state.QuizList === undefined) {
  //   const list =localStorage.getItem('QuizListIDS');
  //   if (list) {
  //     SET_QUIZ_LIST(list);
  //   }} 
  // },[])

  const contextValue = useMemo(
    () => ({
      QuizList: state.QuizList,
      correctAnswers: state.correctAnswers,
      incorrectAnswers: state.incorrectAnswers,
      currentQuestion: state.currentQuestion,
      incrementCorrectAnswers,
      incrementIncorrectAnswers,
      incrementCurrentQuestion,
      SET_QUIZ_LIST,
    }),
    [
      state.QuizList,
      state.correctAnswers,
      state.incorrectAnswers,
      state.currentQuestion,
    ]
  );

  return (
    <QuizProgressContext.Provider value={contextValue}>
      {children}
    </QuizProgressContext.Provider>
  );
};
