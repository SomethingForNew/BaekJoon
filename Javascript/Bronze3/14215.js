// const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number).sort((a, b) => a - b);
const input = require("fs")
  .readFileSync("./testCase.txt")
  .toString()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let [a, b, c] = input;

if (a + b > c) {
  console.log(a + b + c);
} else {
  console.log(2 * (a + b) - 1);
}
