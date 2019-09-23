const assertArrayEqual = require(`../assertArraysEqual`);

// TEST CODE
assertArrayEqual([1, 2, 3], [1, 2, 3]); // => should
assertArrayEqual([1, 2, 3], [1, 2, 4]); // => should
assertArrayEqual([1, 2, 3], [1, 2, 3, 4]); // => should
