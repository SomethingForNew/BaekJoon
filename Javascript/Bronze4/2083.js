// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function rugbyClub(input) {
    let answerArr = [];

    for(let i = 0; i < input.length - 1; i++ ) {
        if(Number(input[i].split(" ")[1]) > 17 || Number(input[i].split(" ")[2]) >= 80) {
            answerArr.push(`${input[i].split(" ")[0]} Senior`);
        } else {
            answerArr.push(`${input[i].split(" ")[0]} Junior`);
        }
    }

    return answerArr.join('\n');
}

console.log(rugbyClub(input));