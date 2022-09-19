// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function small(input) {
    const [T, ...TEST_CASE] = input;
    const ANSWER_ARR = [];

    for(let i = 0; i < T; i++) {
        ANSWER_ARR.push(Math.min.apply(null, TEST_CASE[i].split(" ").map(Number)));
    }

    return ANSWER_ARR.join("\n");
}

console.log(small(input));