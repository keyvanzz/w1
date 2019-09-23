// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length != Object.keys(object2).length) {
    //check to ensure lengths match otherwise false
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      //checks to see if object1 key contains array
      let isEqual = eqObjects(object1[key], object2[key]); //checks to see if values are equal in keys
      if (!isEqual) {
        //if not equal return false
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      //if object keys do not match return false
      return false;
    }
  }
  return true; //if all above parameters pass return true
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  // assertEqual(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(
      `\u2705\u2705\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(
        expected
      )}`
    );
  } else {
    console.log(
      `\uD83D\uDD34\uD83D\uDD34\uD83D\uDD34 Assertion Failed: ${inspect(
        actual
      )} !== ${inspect(expected)}`
    );
  }
};

// TEST CODE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const ac = { a: "5", b: [2, 5] };
const ca = { b: [2, 5], a: "5" };
assertObjectsEqual(ac, ca);
