// FUNCTION IMPLEMENTATION
const emoji = require("node-emoji");
const pizza = emoji.get("pizza");
const coffee = emoji.get("coffee");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${pizza} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`${coffee} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);

// TEST CODE
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(result.length, 2); // new array should have 2 elements!

assertEqual(result[0], "Lighthouse"); // new array index[0] should be "Lighthouse"
