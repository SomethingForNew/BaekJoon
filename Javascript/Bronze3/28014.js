// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs")
  .readFileSync("./testCase.txt")
  .toString()
  .split("\n");

const textCase = input[1];
const spireArr = textCase.toString().split(" ").map(Number);
console.log(spireArr);
let answer = 1;

for (let i = 0; i < spireArr.length; i++) {
  if (spireArr[i] <= spireArr[i + 1]) {
    answer += 1;
  }
}

console.log(answer);
