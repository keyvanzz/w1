const flatten = function(arr) {
  let arr2 = [arr];
  let flattened = [].concat.apply([], arr);

  return flattened;
};

module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]]));
