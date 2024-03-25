"use client";

// Define the action types
export enum ActionType {
  SET_CURRENT_QUEstion,
  INCREMENT_CORRECT_ANSWERS,
  INCREMENT_INCORRECT_ANSWERS,
  INCREMENT_CURRENT_QUESTION,
}

// Define the action interface
interface Action {
  type: ActionType;
  payload?: any;
}

// Create the initial state
export const QuizinitialState = {
  correctAnswers: 0,
  incorrectAnswers: 0,
  currentQuestion:
    typeof window !== 'undefined'
      ? parseInt(localStorage.getItem('currentQuestion') || '0')
      : 0,
};

// Define the reducer function
export const QuizReducer = (state: typeof QuizinitialState, action: Action) => {
  switch (action.type) {
	case ActionType.SET_CURRENT_QUEstion:
		return { ...state, currentQuestion: state.correctAnswers };
    case ActionType.INCREMENT_CORRECT_ANSWERS:
      return { ...state, correctAnswers: state.correctAnswers + 1 };
    case ActionType.INCREMENT_INCORRECT_ANSWERS:
      return { ...state, incorrectAnswers: state.incorrectAnswers + 1 };
    case ActionType.INCREMENT_CURRENT_QUESTION:
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    default:
      return state;
  }
};
