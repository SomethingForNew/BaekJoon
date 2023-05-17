// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const [A, B, C, D, E] = require("fs").readFileSync("testCase/testCase.txt").toString().split('\n').map(Number);
console.log(A < 0 ? (Math.abs(A) * C) + D + (B * E) : (B - A) * E);