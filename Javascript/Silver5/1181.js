// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\r\n");

function sortWords(input) {
    input.shift();
    let sortArr = input.sort().sort((x, y) => x.length - y.length);
    let answerArr = [];

    for(let i = 0; i < sortArr.length; i++) {
        if(answerArr.includes(sortArr[i])) {
            continue;
        } else {
            answerArr.push(sortArr[i]);
        }
    }

    console.log(answerArr.join("\n"));
}

sortWords(input);