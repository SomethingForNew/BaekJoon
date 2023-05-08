// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");

function getTotalScore(input) {
    let numArr = input.map(value => Number(value));
    let answer = 0;

    numArr.forEach(element => {
        answer += element;
    });

    console.log(answer);
}

getTotalScore(input);