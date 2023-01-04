// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");

function hardChoice(input) {
    const A_ARR = input[0].split(" ").map(Number);
    const B_ARR = input[1].split(" ").map(Number);
    let answer = 0;

    for(let i = 0; i < A_ARR.length; i++) {
        if(B_ARR[i] - A_ARR[i] > 0) {
            answer += B_ARR[i] - A_ARR[i];
        }
    }

    return answer;
}

console.log(hardChoice(input));