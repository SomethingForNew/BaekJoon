// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function gambling(input) {
    const TEST_CASE = input.map(Number);
    let ANSWER = 0;

    for(let i = 0; i< TEST_CASE.length; i++) {
        if(TEST_CASE[i] !== -1) {
            ANSWER += TEST_CASE[i];
        }
    }

    return ANSWER;
}

console.log(gambling(input));