const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(
      `\uD83D\uDD34\uD83D\uDD34\uD83D\uDD34 Assertion Failed: ${array1} === ${array2}`
    );
    return;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(
        `\uD83D\uDD34\uD83D\uDD34\uD83D\uDD34 Assertion Failed: [${array1}] === [${array2}]`
      );
      return;
    }
  }
  console.log(
    `\u2705\u2705\u2705 Assertion Passed: [${array1}] === [${array2}]`
  );
};

const without = function(originalArray, removeArray) {
  const result = [];
  for (let i = 0; i < originalArray.length; i++) {
    let found = false;
    for (let j = 0; j < removeArray.length; j++) {
      if (originalArray[i] === removeArray[j]) {
        found = true;
        break;
      }
    }
    if (found === false) {
      result.push(originalArray[i]);
    }
  }
  return result;
};
//TEST CODE
// => [2, 3]

eqArrays(without([1, 2, 3], [1]), [2, 3]); // => should
eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => should
