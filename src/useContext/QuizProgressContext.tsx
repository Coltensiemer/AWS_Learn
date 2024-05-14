'use client';

import React, { createContext, ReactNode, useMemo, useReducer } from 'react';


import { 
  initialQuizState, 
  QuizReducer,
  ActionType,
} from '../useReducer/QuizProgressReducer';

export interface QuizProgressContextType {
  correctAnswersSum: number;
  incorrectAnswersSum: number;
  currentQuestion: number;
  QuizList: any[];
  Correct_Answered: any[];
  Incorrect_Answered: any[];
  Tags: string[];
  QuizTime: number; 
  Direction: string;
  questionLimit: number;
  optionSelected: { [key: number]: string}
  SET_CURRENT_QUESTION: (payload: any) => void;
  SET_CORRECT_ANSWERED: (payload: any) => void;
  SET_INCORRECT_ANSWERED: (payload: any) => void;
  SET_QUIZ_LIST: (payload: any) => void;
  SET_TAGS: (payload: any) => void;
  SET_QUIZ_TIME: (payload: any) => void;
  SET_QUIZ_DIRECTION: (payload: any) => void;
  SET_SHOW_ANSWER: (payload: any) => void;
  SET_QUESTION_LIMIT: (payload: any) => void;
  SET_OPTION_SELECTED: (payload: any) => void;
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
  const [state, dispatch] = useReducer(QuizReducer, initialQuizState);

  const SET_QUIZ_LIST = (payload: any) => {
    dispatch({ type: ActionType.SET_QUIZ_LIST, payload });
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

  const SET_QUIZ_DIRECTION = (payload: string) => {
    dispatch({ type: ActionType.SET_QUIZ_DIRECTION, payload });
  }

  const SET_SHOW_ANSWER = (payload: boolean) => {
    dispatch({ type: ActionType.SET_SHOW_ANSWER, payload });
  } 
  const SET_QUESTION_LIMIT = (payload: number) => {
    dispatch({ type: ActionType.SET_QUESTION_LIMIT, payload });
   }
  
  const SET_OPTION_SELECTED = (payload: any) => {
    dispatch({ type: ActionType.SET_OPTION_SELECTED, payload });
  }

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
      Direction: state.Direction,
      showAnwer: state.showAnswer,
      questionLimit: state.questionLimit,
      optionSelected: state.optionSelected,
      SET_CURRENT_QUESTION,
      SET_CORRECT_ANSWERED,
      SET_INCORRECT_ANSWERED,
      SET_QUIZ_LIST,
      SET_TAGS,
      SET_QUIZ_TIME,
      SET_QUIZ_DIRECTION,
      SET_SHOW_ANSWER,
      SET_QUESTION_LIMIT,
      SET_OPTION_SELECTED
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
      state.Direction,
      state.showAnswer,
      state.questionLimit,
      state.optionSelected
    ]
  );

  return (
    <QuizProgressContext.Provider value={contextValue}>
      {children}
    </QuizProgressContext.Provider>
  );
};
