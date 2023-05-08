// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function countNums(input) {
    const N = parseInt(input[0]);
    const NUM_ARR = input[1].split(" ").map(v => parseInt(v));
    const V = parseInt(input[2]);
    let answer = 0;

    for(let i = 0; i < NUM_ARR.length; i++) {
        if(NUM_ARR[i] === V) {
            answer++;
        }
    }

    console.log(answer);
}

countNums(input);