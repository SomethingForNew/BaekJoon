// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
const input = "10\n5\n8".toString().split("\n").map(Number);

function whoIsThemiddle(input) {
  return input.sort((a, b) => a - b)[Math.floor(input.length / 2)];
}

console.log(whoIsThemiddle(input));
