// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function multiply(input) {
    return (BigInt(input[1]) * BigInt(input[2])).toString();
}

console.log(multiply(input));