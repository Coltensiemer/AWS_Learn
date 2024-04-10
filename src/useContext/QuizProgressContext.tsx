'use client';

import React, { createContext, ReactNode, useMemo, useReducer } from 'react';


import { 
 QuizinitialState,
  QuizReducer,
  ActionType,
} from '../useReducer/QuizProgressReducer';
import { Quiz } from '../useClient/Quiz';

export interface QuizProgressContextType {
  correctAnswersSum: number;
  incorrectAnswersSum: number;
  currentQuestion: number;
  QuizList: [];
  Correct_Answered: [];
  Incorrect_Answered: [];
  Tags: string[];
  QuizTime: number; 
  incrementCorrectAnswers: () => void;
  incrementIncorrectAnswers: () => void;
  SET_CURRENT_QUESTION: (payload: any) => void;
  SET_CORRECT_ANSWERED: (payload: any) => void;
  SET_INCORRECT_ANSWERED: (payload: any) => void;
  SET_QUIZ_LIST: (payload: any) => void;
  SET_TAGS: (payload: any) => void;
  SET_QUIZ_TIME: (payload: any) => void;
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

  const SET_CORRECT_ANSWERED = (payload: any) => {
    dispatch({ type: ActionType.SET_CORRECT_ANSWERED, payload });
  };

  const SET_INCORRECT_ANSWERED = (payload: any) => {
    dispatch({ type: ActionType.SET_INCORRECT_ANSWERED, payload });
  };

  const SET_TAGS = (payload: any) => {
    dispatch({ type: ActionType.SET_TAGS, payload });
  }

  const SET_QUIZ_TIME = (payload: any) => {
    dispatch({ type: ActionType.SET_QUIZ_TIME, payload });
  };

  const contextValue = useMemo(
    () => ({
      QuizList: state.QuizList,
      Correct_Answered: state.Correct_Answered,
      Incorrect_Answered: state.Incorrect_Answered,
      correctAnswersSum: state.correctAnswersSum,
      incorrectAnswersSum: state.incorrectAnswersSum,
      currentQuestion: state.currentQuestion,
      Tags: state.Tags,
      QuizTime: state.QuizTime,
      incrementCorrectAnswers,
      incrementIncorrectAnswers,
      SET_CURRENT_QUESTION,
      SET_CORRECT_ANSWERED,
      SET_INCORRECT_ANSWERED,
      SET_QUIZ_LIST,
      SET_TAGS,
      SET_QUIZ_TIME
    }),
    [
      state.Correct_Answered,
      state.Incorrect_Answered,
      state.QuizList,
      state.correctAnswersSum,
      state.incorrectAnswersSum,
      state.currentQuestion,
      state.Tags,
      state.QuizTime,
    ]
  );

  return (
    <QuizProgressContext.Provider value={contextValue}>
      {children}
    </QuizProgressContext.Provider>
  );
};
