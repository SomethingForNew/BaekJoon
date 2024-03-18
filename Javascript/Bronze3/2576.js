// const input = require("fs").readFileSync("/dev/stdin").toString().toString().split("\n").map(Number);
const input = require("fs")
  .readFileSync("./testCase.txt")
  .toString()
  .split("\n")
  .map(Number);

const tempArr = input.filter((v, i) => v % 2 !== 0).sort((a, b) => a - b);

const tempArrSum = input
  .filter((v, i) => v % 2 !== 0)
  .sort((a, b) => a - b)
  .reduce((acc, cur) => {
    return acc + cur;
  }, 0);

if (tempArrSum !== 0) {
  return console.log(tempArrSum + "\n" + tempArr[0]);
} else {
  return console.log(-1);
}
