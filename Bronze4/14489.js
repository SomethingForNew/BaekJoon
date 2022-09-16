// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function twoChickens(input) {
    let A = Number(input[0].split(" ")[0]);
    let B = Number(input[0].split(" ")[1]);
    let C = Number(input[1]);
    let answer = A + B - (C * 2) >= 0 ? A + B - (C * 2) : A + B;

    return answer;
}

console.log(twoChickens(input));