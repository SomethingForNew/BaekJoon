// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split(" ");

function simpleSum(input) {

    return Number(input[0]) + Number(input[2]) === Number(input[4]) ? "YES" : "NO";
}

console.log(simpleSum(input));