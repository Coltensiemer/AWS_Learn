export const convertToMinutesAndSeconds = (totalSeconds: number) => {
  if (isNaN(totalSeconds)) {
    throw new Error('Please enter a valid number');
  }

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return { minutes, seconds };
};
