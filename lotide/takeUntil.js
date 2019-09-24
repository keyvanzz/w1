const takeUntil = function(array, callback) {
  const results = [];
  for (let num of array) {
    if (callback(num)) {
      return result;
    }
    results.push(num);
  }
  return results;
};

module.exports = takeUntil;
