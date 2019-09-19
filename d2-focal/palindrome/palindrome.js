// Assertion Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};

// FUNCTION IMPLEMENTATION (BUGGY)
const isPalindrome = function(str) {
  if (str.length === 1) {
    return true;
  }
  let noSpaces = str.split(" ").join("");
  let midIndex = Math.floor(noSpaces.length / 2);
  let lastIndex = noSpaces.length - 1;

  for (let i = 0; i < midIndex; i++) {
    if (noSpaces[i].toLowerCase() !== noSpaces[lastIndex - i].toLowerCase())
      return false;
  }
  return true;
};

// TEST CODE
// These should all pass assertion, but they don't.
assertEqual(isPalindrome("p"), true);
assertEqual(isPalindrome("p"), true);
assertEqual(isPalindrome("foo"), false);
assertEqual(isPalindrome("racecar"), true);
assertEqual(isPalindrome("live without evil"), false);
assertEqual(isPalindrome("just some random words"), false);

// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
assertEqual(isPalindrome("Kayak"), true);
assertEqual(isPalindrome("a santa at NASA"), true);
