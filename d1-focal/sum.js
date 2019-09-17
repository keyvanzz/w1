const args = process.argv.slice(2);
//console.log(args);

let sum = function(x, y) {
  return parseInt(x) + parseInt(y);
};

//args = [4, 5]
console.log(sum(args[0], args[1]));
