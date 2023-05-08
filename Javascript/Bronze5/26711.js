// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n").map(BigInt);

function APlusB(input) {
    return (input[0] + input[1]).toString();
}

console.log(APlusB(input));