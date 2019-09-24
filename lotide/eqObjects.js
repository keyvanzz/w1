// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(
      `\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`
    );
  } else if (actual !== expected) {
    console.log(
      `\uD83D\uDD34\uD83D\uDD34\uD83D\uDD34 Assertion Failed: ${actual} !== ${expected}`
    );
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqArrays = function(a, b) {
  if (a instanceof Array && b instanceof Array) {
    if (a.length != b.length)
      //ensuring correct length
      return false;
    for (
      let i = 0;
      i < a.length;
      i++ //ensuring each element is equal
    )
      if (!eqArrays(a[i], b[i])) return false;
    return true;
  } else {
    return a === b;
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length != Object.keys(object2).length) {
    //check to ensure lengths match otherwise false
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      //checks to see if object1 key contains array
      let isEqual = eqArrays(object1[key], object2[key]); //checks to see if values are equal in keys
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

module.exports = eqObjects;

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc)); // => false

const ac = { a: "5", b: [2, 6] };
const ca = { b: [2, 5], a: "5" };
console.log(eqArrays(eqObjects(ac, ca), false));

const bcd = { a: 5, b: 2, c: "1" };
const cab = { c: 1, a: "5", b: "5" };
console.log(eqArrays(eqObjects(cab, bcd), false));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqArrays(eqObjects(cd, dc), true));
console.log(eqArrays(eqObjects(ba, cd), false));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqArrays(eqObjects(cd, cd2), false));
