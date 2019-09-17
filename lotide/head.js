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

const head = function(arr) {
  return arr[0];
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
