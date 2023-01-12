// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim();

function korean2(input) {
    return input.charCodeAt() - 44031;
}

console.log(korean2(input));