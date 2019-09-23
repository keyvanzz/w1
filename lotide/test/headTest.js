const assertEqual = require(`../assertEqual`);
const head = require(`../head`);

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Yo Yo", "Lighthouse", "Labs"]), "Yo Yo");
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
