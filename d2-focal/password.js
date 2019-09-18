const args = process.argv.slice(2);
let string = args[0];

let obfuscate = function(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      result += "4";
    } else if (string[i] === "e") {
      result += "3";
    } else if (string[i] === "o") {
      result += "0";
    } else if (string[i] === "l") {
      result += "1";
    } else {
      result += string[i];
    }
  }
  return result;
};

console.log(obfuscate(string));
