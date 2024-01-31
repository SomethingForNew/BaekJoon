// const [N, B] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
const [N, B] = require("fs")
  .readFileSync("./testCase.txt")
  .toString()
  .split(" ")
  .map(Number);

console.log(N.toString(B).toUpperCase());
