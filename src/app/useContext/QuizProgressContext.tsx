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
  SET_CURRENT_QUESTION: (payload: any) => void;
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

  //male sure state updates
  const incrementCorrectAnswers = () => {
    dispatch({ type: ActionType.INCREMENT_CORRECT_ANSWERS });
  };

  //make sure state updates
  const incrementIncorrectAnswers = () => {
    dispatch({ type: ActionType.INCREMENT_INCORRECT_ANSWERS });
  };

  // When this function is called, the useEffect hook will be triggered and the current question will be incremented
  const SET_CURRENT_QUESTION = (payload: number) => {
    dispatch({ type: ActionType.SET_CURRENT_QUESTION, payload });
  };

  const contextValue = useMemo(
    () => ({
      QuizList: state.QuizList,
      correctAnswers: state.correctAnswers,
      incorrectAnswers: state.incorrectAnswers,
      currentQuestion: state.currentQuestion,
      incrementCorrectAnswers,
      incrementIncorrectAnswers,
      SET_CURRENT_QUESTION,
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
