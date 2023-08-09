
function generateRandomData() {
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } // this function make a random number between 1 to 100
 
    function getRandomDate(startDate, endDate) {
      const startTimestamp = startDate.getTime();
      const endTimestamp = endDate.getTime();
      const randomTimestamp = getRandomNumber(startTimestamp, endTimestamp);
      return new Date(randomTimestamp);
    } // this function make a random date between 2020 to 2023 
 
    const randomWords = ["a", "b", "c", "d", "e", "f", "g", "h"]; // here is our words 
   
    // here is our input data for getRandomDate function 
    const startYear = 2020;
    const endYear = 2023;
    const startDate = new Date(startYear, 0, 1);
    const endDate = new Date(endYear, 11, 31);
 
    const randomDataArray = []; // here is our object 
 
    for (let i = 0 ; i <= 1 ; i++) {
      const randomObject = {
        random_number: getRandomNumber(1, 100),
        random_date: getRandomDate(startDate, endDate).toISOString().split('T')[0],
        random_word: randomWords[Math.floor(Math.random() * randomWords.length)]
      };
      randomDataArray.push(randomObject); // here our information push into our object 
    }
 
    return randomDataArray;
  }
 
  const randomData = generateRandomData();
  console.log(randomData);