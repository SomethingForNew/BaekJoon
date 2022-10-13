// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim();

function CAPS(input) {
    return input.toUpperCase();
}

console.log(CAPS(input));