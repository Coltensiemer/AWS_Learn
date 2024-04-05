

//to generate a random string for local storage in Quiz
export const generateSessionId = () => {
    return Math.random().toString(36).substr(2, 10); // Example of generating a random string
  };