// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function celebrityJeopardy(input) {
    let answerArr = [];

    for(let i = 0 ; i < input.length; i++) {
        answerArr.push(input[i]);
    }

    console.log(answerArr.join("\n"));
}

celebrityJeopardy(input);