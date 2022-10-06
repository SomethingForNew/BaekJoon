// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function canYouAddThis(input) {
    const [CNT, ...testCase] = input;
    const ANSWER_ARR = [];

    for(let i = 0; i < CNT; i++) {
        ANSWER_ARR.push(Number(testCase[i].split(" ")[0]) + Number(testCase[i].split(" ")[1]));
    }

    return ANSWER_ARR.join("\n");
}

console.log(canYouAddThis(input));