// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");
const input = "3\nACDKJFOWIEGHE\nO\nAB".toString().split("\n");
const [testCaseCnt, ...testCase] = input;

function string(input) {
    let tempArr = [];
    let tempString = "";

    for(let i = 0; i < testCaseCnt; i++) {
        tempString = testCase[i].slice(0, 1) + testCase[i].slice(testCase[i].length - 1, testCase[i].length);
        tempArr.push(tempString);
    }

    console.log(tempArr.join("\n"));
}

string(input);