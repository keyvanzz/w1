const assertArrayEqual = require(`./assertArraysEqual`);

const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);
  const middleValue = array[middleIndex];
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    return [middleValue];
  } else if (array.length % 2 === 0) {
    const previousValue = array[middleIndex - 1];
    return [previousValue, middleValue];
  }
};

module.exports = middle;
