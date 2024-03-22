import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
  useReducer
} from 'react';

import { QuizinitialState, QuizReducer, ActionType } from '../useReducer/QuizProgressReducer';


export interface QuizProgressContextType {
  correctAnswers: number;
  incorrectAnswers: number;
  currentQuestion: number;
  incrementCorrectAnswers: () => void;
  incrementIncorrectAnswers: () => void;
  incrementCurrentQuestion: () => void;
}

//Create a context to store the quiz progress data
export const QuizProgressContext = createContext<
  QuizProgressContextType | undefined
>(undefined);

//interface for children of the QuizProgressProvider
interface QuizProgressProviderProps {
  children: ReactNode;
}

export const QuizProgressProvider = ({
  children,
}: QuizProgressProviderProps) => {


  const[state, dispatch] = useReducer(QuizReducer, QuizinitialState);


  // const [totalQuestions, setTotalQuestions] = useState(0);
  // const [currentQuestion, setCurrentQuestion] = useState(() => {
  //   if (typeof window !== 'undefined') {
  //     const storedQuestion = localStorage.getItem('currentQuestion');
  //     return storedQuestion ? parseInt(storedQuestion) : 0;
  //   } else {
  //     return 0; // Default value
  //   }
  // });
  // const [correctAnswers, setCorrectAnswers] = useState(0);
  // const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const incrementCorrectAnswers = () => {
    dispatch({type: ActionType.INCREMENT_CORRECT_ANSWERS});
  };

  const incrementIncorrectAnswers = () => {
  dispatch({type: ActionType.INCREMENT_INCORRECT_ANSWERS});
  };

  // When this function is called, the useEffect hook will be triggered and the current question will be incremented
  const incrementCurrentQuestion = () => {
dispatch({type: ActionType.INCREMENT_CURRENT_QUESTION});
  };


  useEffect(() => {
    //This is to set the currentquestion in local storage
    if (typeof window !== 'undefined') {
      localStorage.setItem('currentQuestion', state.currentQuestion.toString());
    }
  }, [state.currentQuestion]);


  const contextValue = useMemo(
    () => ({
      correctAnswers: state.correctAnswers,
      incorrectAnswers: state.incorrectAnswers,
      currentQuestion: state.currentQuestion,
      incrementCorrectAnswers,
      incrementIncorrectAnswers,
      incrementCurrentQuestion,
    }),
    [state.correctAnswers, state.incorrectAnswers, state.currentQuestion]
  );

  return (
    <QuizProgressContext.Provider
      value={contextValue}
    >
      {children}
    </QuizProgressContext.Provider>
  );
};
