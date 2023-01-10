// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");

function silnia(input) {
    const [N, ...ARR] = input;
    let tempArr = [];
    let answerArr = [];

    for(let i = 0; i < N; i++) {
        let text = "";

        for(let j = 0; j < ARR[i].length; j++) {
            if(ARR[i][j] !== ARR[i][j + 1]) {
                tempArr.push(ARR[i][j]);
                text += ARR[i][j];
            }
        }

        answerArr.push(text);
    }

    return answerArr.join("\n");
}

console.log(silnia(input));