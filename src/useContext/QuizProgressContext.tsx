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
  QuizFinishTime: number | string | null;
  Direction: string;
  optionSelected: { [key: number]: string[]}
  quizLength: number;
  showAnswers: boolean;
  SET_CURRENT_QUESTION: (payload: any) => void;
  SET_CORRECT_ANSWERED: (payload: any) => void;
  SET_INCORRECT_ANSWERED: (payload: any) => void;
  SET_QUIZ_LIST: (payload: any) => void;
  SET_TAGS: (payload: any) => void;
  SET_QUIZ_TIME: (payload: any) => void;
  SET_QUIZ_FINISH_TIME: (payload: any) => void;
  SET_QUIZ_DIRECTION: (payload: any) => void;
  SET_OPTION_SELECTED: (payload: any, inputType: string) => void;
  SET_QUIZ_LENGTH: (payload: any) => void;
  SET_SHOW_ANSWERS: (payload: any) => void;
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

  //If an answer is correct, this function will be called and the quiz id will be added to the correct array
  const SET_CORRECT_ANSWERED = (payload: any) => {
    dispatch({ type: ActionType.SET_CORRECT_ANSWERED, payload });
  };

  //if an answer is incorrect, this function will be called and the quiz id will be added to the incorrect array
  const SET_INCORRECT_ANSWERED = (payload: any) => {
    dispatch({ type: ActionType.SET_INCORRECT_ANSWERED, payload });
  };

  //This function will set the tags for the quiz in the Question page. 
  const SET_TAGS = (payload: any) => {
    dispatch({ type: ActionType.SET_TAGS, payload });
  }

  //This function will set the time for the quiz in the Question page.
  const SET_QUIZ_TIME = (payload: any) => {
    dispatch({ type: ActionType.SET_QUIZ_TIME, payload });
  };

  const SET_QUIZ_FINISH_TIME = (payload: any) => {
    dispatch({ type: ActionType.SET_QUIZ_FINISH_TIME, payload });
  }

  const SET_QUIZ_DIRECTION = (payload: string) => {
    dispatch({ type: ActionType.SET_QUIZ_DIRECTION, payload });
  }

  const SET_OPTION_SELECTED = (payload: any, inputType: string) => {
    dispatch({ type: ActionType.SET_OPTION_SELECTED, payload, inputType: inputType });
  }

  const SET_QUIZ_LENGTH = (payload: number) => { 
    dispatch({ type: ActionType.SET_QUIZ_LENGTH, payload });
  } 

  const SET_SHOW_ANSWERS = (payload: any) => {
dispatch({ type: ActionType.SET_SHOW_ANSWERS, payload });
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
      QuizFinishTime: state.QuizFinishTime,
      Direction: state.Direction,
      optionSelected: state.optionSelected,
      quizLength: state.quizLength,
      showAnswers: state.showAnswers,
      SET_CURRENT_QUESTION,
      SET_CORRECT_ANSWERED,
      SET_INCORRECT_ANSWERED,
      SET_QUIZ_LIST,
      SET_TAGS,
      SET_QUIZ_TIME,
      SET_QUIZ_FINISH_TIME,
      SET_QUIZ_DIRECTION,
      SET_OPTION_SELECTED,
      SET_QUIZ_LENGTH,
      SET_SHOW_ANSWERS
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
      state.optionSelected,
      state.quizLength,
      state.showAnswers,
    ]
  );

  return (
    <QuizProgressContext.Provider value={contextValue}>
      {children}
    </QuizProgressContext.Provider>
  );
};
