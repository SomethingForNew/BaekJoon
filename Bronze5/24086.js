// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = require("fs").readFileSync("testCase/testCase.txt").toString();

function 身長(input) {
    return Number(input.split("\n")[1]) - Number(input.split("\n")[0]);
}

console.log(身長(input));