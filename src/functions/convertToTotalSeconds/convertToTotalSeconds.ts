export const convertToTotalSeconds = (minutes: number = 0, seconds: number = 0) => { 
 if (isNaN(minutes) || isNaN(seconds)) {	  throw new Error('Please enter a valid number')
}

const minutesToseconds = minutes * 60;
const totalseconds = minutesToseconds + seconds;
return totalseconds;
}

