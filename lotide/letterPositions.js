eqArrays = function(a, b) {
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

assertArraysEqual = function(a, b) {
  if (eqArrays(a, b)) {
    console.log("this array is true");
  } else {
    console.log("this array is false");
  }
};

let quote = "Lighthouse Labs";
quote = quote.replace(/\s+/g, ""); //removes spaces from string

let letterPositions = function(sentence) {
  const results = {};
  const letters = sentence.split("");

  for (let letter of letters) {
    letter = letter.toLowerCase();
    if (results[letter]) {
      result[letter] = result[letter];
    }
  }

  return results;
};

console.log(assertArraysEqual(letterPositions("Hello").e, [1]));
