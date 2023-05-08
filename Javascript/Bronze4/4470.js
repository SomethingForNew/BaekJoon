// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim();

function lineNumber(input) {
    const [cnt, ...arr] = input.split("\n");
    let answerArr = [];

    for(let i = 0; i < cnt; i++) {
        answerArr.push(`${i + 1}. ${arr[i]}`);
    }

    return answerArr.join("\n");
}

console.log(lineNumber(input));