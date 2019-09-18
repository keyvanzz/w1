const args = process.argv.slice(2);
let number = args[0];

let diceRoller = function(number) {
  let results = [];
  for (let i = 0; i < number; i++) {
    results.push(Math.floor(Math.random() * 6));
  }
  return results;
};

console.log(`Rolled ${number} dice: ${diceRoller(number).join(", ")}`);
