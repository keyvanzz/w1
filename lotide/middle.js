const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`Assertion Failed: ${array1} === ${array2}`);
    return;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`Assertion Failed: [${array1}] === [${array2}]`);
      return;
    }
  }
  console.log(`Assertion Passed: [${array1}] === [${array2}]`);
};

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
//TEST CODE
eqArrays(middle([1]), []); // => should
eqArrays(middle([1, 2]), []); // => should
eqArrays(middle([1, 2, 3, 4, 5]), [3]); // => should
eqArrays(middle([1, 2, 3, 4]), [2, 3]); // => should
