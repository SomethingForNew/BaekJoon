// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function lineNumber(input) {
    const [NM, ...testCase] = input;
    // const [N, M] = NM.split(" ");
    const answerArr = [];

    for(let i = 0; i < testCase.length; i++) {
        answerArr.push(testCase[i].split("").reverse().join(""));
    }

    return answerArr.join("\n");
}

console.log(lineNumber(input));