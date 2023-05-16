// const [A, B, C] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [A, B, C] = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");

function timeCard(input) {
  let startTime = input[0] * 3600 + input[1] * 60 + input[2];
  let endTime = input[3] * 3600 + input[4] * 60 + input[5];
  let totalTime = endTime - startTime;

  return `${parseInt((totalTime / 3600) % 24)} ${parseInt((totalTime / 60) % 60)} ${totalTime % 60}`;
}

console.log(timeCard(A.split(" ").map(Number)));
console.log(timeCard(B.split(" ").map(Number)));
console.log(timeCard(C.split(" ").map(Number)));
