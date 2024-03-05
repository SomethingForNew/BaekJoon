// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs")
  .readFileSync("./testCase.txt")
  .toString()
  .split("\n");
const T = input[0];

for (let i = 1; i <= T; i++) {
  const x1 = input[i].split(" ").map(Number)[0];
  const y1 = input[i].split(" ").map(Number)[1];
  const f1 = input[i].split(" ").map(Number)[2];
  const x2 = input[i].split(" ").map(Number)[3];
  const y2 = input[i].split(" ").map(Number)[4];
  const f2 = input[i].split(" ").map(Number)[5];

  console.log(f1 + Math.abs(x1 - x2) + Math.abs(y1 - y2) + f2);
}
