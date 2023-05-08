// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\r\n");

function orderByASC(input) {
    let totalCnt = input[0];
    input.shift();
    let testCase = input;
    let sortTestCase = testCase.sort(function(a, b) {return a - b});

    console.log(sortTestCase.join("\n"));
}

orderByASC(input);