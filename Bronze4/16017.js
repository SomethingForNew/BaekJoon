// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim();

function telemarketerOrNot(input) {
    const [A, B, C, D] = input.split("\n").map(Number);

    return A > 7 && B === C && D > 7 ? "ignore" : "answer";
}

console.log(telemarketerOrNot(input));