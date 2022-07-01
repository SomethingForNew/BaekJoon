// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "34".toString().trim();

function cntZero(input) {
    let testCase = Number(input);
    let answer = 0;

    while(testCase >= 5) {
        answer += Math.floor(testCase / 5);
        testCase /= 5;
    }

    console.log(Math.floor(answer));
}

cntZero(input);