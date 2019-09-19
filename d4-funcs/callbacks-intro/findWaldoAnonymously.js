const findWaldo = function(names, found) {
  names.forEach(function(name, index, array) {
    if (name === "Waldo") {
      found(index);
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found him at", index + "!");
});
