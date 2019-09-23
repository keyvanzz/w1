const assertArrayEqual = require(`../assertArraysEqual`);
const middle = require(`../middle`);

//TEST CODE
assertArrayEqual(middle([1]), [`[]`]); // => should
assertArrayEqual(middle([1, 2]), [`[]`]); // => should
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]); // => should
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]); // => should
