const lighthouses = [
  "Gibraltar Point",
  "Peggy's Point",
  "Cove Island",
  "Discovery Island",
  "Cape Scott",
  "Point Clark",
  "Kincardine"
];

// write code here to use map
const points = lighthouses.map(x => x.length);
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]
console.log(points);
