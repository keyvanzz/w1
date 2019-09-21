// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function() {
  let numOfNames = {};
  for (let i = 0; i < firstNames.length; i++) {
    if (typeof numOfNames[firstNames[i]] === "undefined") {
      numOfNames[firstNames[i]] = 1;
    } else {
      numOfNames[firstNames[i]]++;
    }
  }
  return numOfNames;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true
});

// TEST CODE
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
