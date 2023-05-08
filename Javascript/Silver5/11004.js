// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\r\n");

function kNumbering(input) {
    let K = input[0].split(" ")[1];
    let testCase = input[1].toString().split(" ").map(v => Number(v));

    console.log(testCase.sort((a, b) => {return a - b})[K - 1]);
}

kNumbering(input);