import {
  QuizIndexTrackerProps,
  getNextorPrevIndex,
} from './getNextorPrevIndex';

describe('getNextorPrevIndex function', () => {
  const quizList: number[] = [
    132,
    59,
    69,
    10000,
    1,
    2,
    367,
    44,
  ];

  it('Should return the next index when currentQuestion is 0', () => {
const props: QuizIndexTrackerProps = {
  currentQuestion: 0,
  quizList,
  direction: 'next',
  }; 
  expect(getNextorPrevIndex(props)).toBe(59);
  }
  )


  it('Should throw an error if currentQuestion is not found in the quizList', () => {
    const props: QuizIndexTrackerProps = {
      currentQuestion: 5,
      quizList,
      direction: 'next',
    };
    expect(() => getNextorPrevIndex(props)).toThrow(
      'Index out of bounds in quizList'
    );
  });

  it('should return the next index when direction is "next"', () => {
    const props: QuizIndexTrackerProps = {
      currentQuestion: 59,
      quizList,
      direction: 'next',
    };
    expect(getNextorPrevIndex(props)).toBe(69);
  });

  it('should return the previous index when direction is "prev"', () => {
    const props: QuizIndexTrackerProps = {
      currentQuestion: 59,
      quizList,
      direction: 'prev',
    };
    expect(getNextorPrevIndex(props)).toBe(132);
  });

  it('should throw an error when direction is neither "next" nor "prev"', () => {
    const props: QuizIndexTrackerProps = {
      currentQuestion: 2,
      quizList,
      direction: 'invalid',
    };
    expect(() => getNextorPrevIndex(props)).toThrow(
      'Error with next or prev index'
    );
  });
});
