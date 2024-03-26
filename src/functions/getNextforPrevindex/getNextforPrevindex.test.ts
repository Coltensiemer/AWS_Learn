import { QuizIndexTrackerProps, getNextorPrevIndex } from "./getNextorPrevIndex";





describe('getNextorPrevIndex function', () => {
const quizList: string[] = ["132, 59, 69, 10000, 1, 2, 367, 44, 5, 556, 887, 8, 9, 10"];


  it('should return the next index when direction is "next"', () => {
    const props: QuizIndexTrackerProps = {
      currentQuestion: 59,
      quizList,
      direction: 'next',
    };
    expect(getNextorPrevIndex(props)).toBe("69");
  });

  it('should return the previous index when direction is "prev"', () => {
    const props: QuizIndexTrackerProps = {
      currentQuestion: 59,
      quizList,
      direction: 'prev',
    };
    expect(getNextorPrevIndex(props)).toBe('132');
  });

//   it('should throw an error when direction is neither "next" nor "prev"', () => {
//     const props: QuizIndexTrackerProps = {
//       currentQuestionIndex: 0,
//       quizList,
//       direction: 'invalid',
//     };
//     expect(() => getNextorPrevIndex(props)).toThrow('Error with next or prev index');
//   });

// //   it('should throw an error when currentQuestionIndex is null', () => {
// //     const props: QuizIndexTrackerProps = {
// //       currentQuestionIndex: ,
// //       quizList,
// //       direction: 'next',
// //     };
// //     expect(() => getNextorPrevIndex(props)).toThrow('Current Index is undefined');
// //   });

//   it('should throw an error when currentQuestionIndex is out of bounds for "next"', () => {
//     const props: QuizIndexTrackerProps = {
//       currentQuestionIndex: 2,
//       quizList,
//       direction: 'next',
//     };
//     expect(() => getNextorPrevIndex(props)).toThrow('Index out of bounds');
//   });

//   it('should throw an error when currentQuestionIndex is out of bounds for "prev"', () => {
//     const props: QuizIndexTrackerProps = {
//       currentQuestionIndex: 0,
//       quizList,
//       direction: 'prev',
//     };
//     expect(() => getNextorPrevIndex(props)).toThrow('Index out of bounds');
//   });
});
