// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim();

function triDu(input) {
    return Math.max.apply(null, input.split(" ").map(Number));
}

console.log(triDu(input));