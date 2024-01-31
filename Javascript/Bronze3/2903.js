// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = require("fs").readFileSync("./testCase.txt").toString();
console.log((2 ** input + 1) ** 2);
