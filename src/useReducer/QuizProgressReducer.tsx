'use client';

import { any, number } from 'zod';
import { Quiz } from '../useClient/Quiz';
import { Reducer } from 'react';

// Define the action types
export enum ActionType {
  SET_CURRENT_QUESTION,
  SET_QUIZ_LIST,
  SET_CORRECT_ANSWERED,
  SET_INCORRECT_ANSWERED,
  SET_TAGS,
  SET_QUIZ_TIME,
  SET_QUIZ_DIRECTION,
  SET_SHOW_ANSWER,
  SET_QUESTION_LIMIT,
  SET_OPTION_SELECTED,
}

// Define the action interface
interface Action {
  type: ActionType;
  payload?: any;
}

// Define the initial state type
export type QuizinitialState = {
  QuizList: any[];
  Correct_Answered: any[];
  Incorrect_Answered: any[];
  Tags: any[];
  QuizTime: number;
  correctAnswersSum: number;
  incorrectAnswersSum: number;
  currentQuestion: number;
  optionSelected: {[key: number]: string };
  Direction: string;
  showAnswer: boolean;
  questionLimit: number;
};

// Create the initial state object
export const initialQuizState: QuizinitialState = {
  QuizList: [],
  Correct_Answered: [],
  Incorrect_Answered: [],
  Tags: [],
  QuizTime: 0,
  correctAnswersSum: 0,
  incorrectAnswersSum: 0,
  currentQuestion: 0,
  Direction: 'next',
  showAnswer: false,
  questionLimit: 60,
  optionSelected: {},
};

// Define the reducer function
export const QuizReducer: Reducer<QuizinitialState, Action> = (
  state,
  action
) => {
  switch (action.type) {
    case ActionType.SET_CORRECT_ANSWERED:
      return {
        ...state,
        Correct_Answered: [...state.Correct_Answered, action.payload],
      };
    case ActionType.SET_INCORRECT_ANSWERED:
      return {
        ...state,
        Incorrect_Answered: [...state.Incorrect_Answered, action.payload],
      };
    case ActionType.SET_CURRENT_QUESTION:
      return { ...state, currentQuestion: action.payload };
    case ActionType.SET_QUIZ_LIST:
      return { ...state, QuizList: action.payload };
    case ActionType.SET_TAGS:
      return { ...state, Tags: action.payload };
    case ActionType.SET_QUIZ_TIME:
      return { ...state, QuizTime: action.payload };
    case ActionType.SET_QUIZ_DIRECTION:
      return { ...state, Direction: action.payload };
    case ActionType.SET_SHOW_ANSWER:
      return { ...state, showAnswer: action.payload };
    case ActionType.SET_QUESTION_LIMIT:
      return { ...state, questionLimit: action.payload };
    case ActionType.SET_OPTION_SELECTED:
      return {
        ...state,
        optionSelected: {
          ...state.optionSelected,
          ...action.payload,
        },}
    default:
      return state;
  }
};
