// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(
      `\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`
    );
  } else if (actual !== expected) {
    console.log(
      `\uD83D\uDD34\uD83D\uDD34\uD83D\uDD34 Assertion Failed: ${actual} !== ${expected}`
    );
  }
};

let sentence = "lighthouse in the house";
sentence = sentence.replace(/\s+/g, ""); //Removes spaces from string

const countLetters = function(text) {
  const result = {};
  const letters = text.split("");
  for (let letter of letters) {
    letter = letter.toLowerCase(); //Converts to lower case
    if (result[letter]) {
      //If result is in the object
      result[letter] += result[letter]; //It will be added to total
    } else {
      //If result is not in the object
      result[letter] = 1; //It will add additional key
    }
  }
  return result;
};

module.exports = countLetters;

// TEST CODE
console.log(countLetters(sentence));
module.exports = assertEqual;
