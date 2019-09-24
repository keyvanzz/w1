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

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["control", "ground", "to", "major", "tom"];
const num = [1, 2, 3];
const num2 = ["1", "2", "3"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// TEST CODE
const results1 = map(words, function(word) {
  return word[0];
});
const results2 = map(words, function(word) {
  return word[0];
});
assertEqual(eqArrays(results1, results2), true);
assertEqual(eqArrays(words, words2), false);
assertEqual(eqArrays(num, num2), false);
assertEqual(eqArrays(results1, ["g", "c", "t", "m", "t"]), true); // => should
assertEqual(eqArrays(results1, ["r", "c", "t", "m", "o"]), true); // => should
