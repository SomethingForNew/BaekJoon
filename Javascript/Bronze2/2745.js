// const [N, B] = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const [N, B] = require("fs")
  .readFileSync("./testCase.txt")
  .toString()
  .split(" ");

console.log(parseInt(N, B));
