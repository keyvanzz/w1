const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`Assertion Failed: ${array1} === ${array2}`);
    return;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`Assertion Failed: ${array1} === ${array2}`);
      return;
    }
  }
  console.log(`Assertion Passed: ${array1} === ${array2}`);
};
// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]); // => should
eqArrays([1, 2, 3], [1, 2, 4]); // => should
eqArrays([1, 2, 3], [1, 2, 3, 4]); // => should
