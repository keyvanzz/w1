const assertEqual = require(`../assertEqual`);
const tail = require(`../tail`);

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);

// TEST CODE
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(result.length, 2); // new array should have 2 elements!

assertEqual(result[0], "Lighthouse"); // new array index[0] should be "Lighthouse"
