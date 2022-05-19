// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

console.log(Math.min(input[0], input[1], input[2]) + Math.min(input[3], input[4]) - 50);