// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync("./Javascript/testCase.txt")
  .toString()
  .trim()
  .split("\n");

function newTonAndApple(input) {
  const PINFO = input[0].split(" ");
  const [X, Y, R] = input[1].split(" ");

  return PINFO.indexOf(X) + 1;
}

console.log(newTonAndApple(input));
