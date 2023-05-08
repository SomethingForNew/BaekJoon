// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function ISBN(input) {
    const [a, b, c] = input;
    const digitNumber = 9 * 1 + 7 * 3 + 8 * 1 + 0 * 3 + 9 * 1 + 2 * 3 + 1 * 1 + 4 * 3 + 1* 1 + 8 * 3;

    return `The 1-3-sum is ${digitNumber + a * 1 + b * 3 + c * 1}`;
}

console.log(ISBN(input));