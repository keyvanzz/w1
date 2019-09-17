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

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
