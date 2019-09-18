const args = process.argv.slice(2);
//console.log(args);

let sum = function(x, y) {
  //You can even use "+" to transfer to number
  return parsInt(x) + parsInt(y);
};

//args = [4, 5]
console.log(sum(args[0], args[1]));
