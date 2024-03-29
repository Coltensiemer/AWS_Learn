"use client";

// Define the action types
export enum ActionType {
  SET_CURRENT_QUESTION,
  SET_QUIZ_LIST,
  SET_CORRECT_ANSWERED,
  SET_INCORRECT_ANSWERED,
  INCREMENT_CURRENT_QUESTION,
  INCREMENT_CORRECT_ANSWERS,
  INCREMENT_INCORRECT_ANSWERS,
}

// Define the action interface
interface Action {
  type: ActionType;
  payload?: any;
}

// Create the initial state
export const QuizinitialState = {
  QuizList: [],
  Correct_Answered: [],
  Incorrect_Answered: [],
  correctAnswersSum: 0,
  incorrectAnswersSum: 0,
  currentQuestion: 0,
};

// Define the reducer function
export const QuizReducer = (state: typeof QuizinitialState, action: Action) => {
  switch (action.type) {
    case ActionType.INCREMENT_CORRECT_ANSWERS:
      return { ...state, correctAnswers: state.correctAnswersSum + 1 };
    case ActionType.INCREMENT_INCORRECT_ANSWERS:
      return { ...state, incorrectAnswers: state.incorrectAnswersSum + 1 };
    case ActionType.SET_CORRECT_ANSWERED:
      return { ...state, Correct_Answered: action.payload };    
      case ActionType.SET_INCORRECT_ANSWERED:
        return { ...state, Incorrect_Answered: action.payload };
    case ActionType.SET_CURRENT_QUESTION:
      return { ...state, currentQuestion: action.payload};
      case ActionType.SET_QUIZ_LIST:
          return { ...state, QuizList: action.payload}
        
    default:
      return state;
  }
};
