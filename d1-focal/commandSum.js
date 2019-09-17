//W1D2 - Lecture! https://www.youtube.com/channel/UCdBuf9JgWK37SfvchIVEMgw/live

//Getting command line arguments
const getArguments = function() {
  const arguments = process.argv.slice(2);
  return arguments;
};

const getWholeNumber = function(item) {
  //Convert the strings to numbers
  let isNumber = Number(item);
  //Check if the number is a whole number
  let isWhole = Number.isInteger(isNumber);
  if (isNumber && isWhole) {
    return isNumber;
  } else {
    return 0;
  }
};

//Loop
const sumNumbers = function(array) {
  let sum = 0;
  for (let element of array) {
    const result = getWholeNumber(element);
    sum += result;
    debugger;
  }
  return sum;
};

//Logging the sum or some output to user
const arguments = getArguments();
const sum = sumNumbers(args);
console.log(`Your ${sum} total is ${sum}`);
