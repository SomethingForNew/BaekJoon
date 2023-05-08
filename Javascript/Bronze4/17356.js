// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split(" ").map(Number);

function wookJae(input) {
    const [A, B] = input;
    const M = ((B - A) / 400);
    const ANSWER = 1 / (1 + Math.pow(10, M));

    return ANSWER;
}

console.log(wookJae(input));