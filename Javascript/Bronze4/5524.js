// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");

function admissionManagement(input) {
    const [N, ...ARR] = input;
    let answerArr = [];

    for(let i = 0; i < N; i++) {
        answerArr.push(ARR[i].toLowerCase());
    }
    
    return answerArr.join("\n");
}

console.log(admissionManagement(input));