const findWaldo = function(names, found) {
  names.forEach(function(name, index, array) {
    if (name === "Waldo") {
      found(index);
    }
  });
};

const actionWhenFound = function(index) {
  console.log(`Found him at ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
