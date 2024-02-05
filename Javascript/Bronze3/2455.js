// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync("./testCase.txt")
  .toString()
  .trim()
  .split("\n");

let current = 0;
let answer = 0;

for (let i = 0; i < 4; i++) {
  const [OUT, IN] = input[i].split(" ").map(Number);
  current += IN;
  current -= OUT;
  answer = Math.max(answer, current);
}

console.log(answer);
