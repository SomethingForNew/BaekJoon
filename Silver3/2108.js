// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function statistics(input) {
    let testCaseCnt = input.shift();
    let sortTemp = input.sort();
    let firstAswer  = "";
    let secondAswer = "";
    let thirdAswer  = "";
    let fourthAswer = sortTemp[sortTemp.length - 1] - sortTemp[0];
    let answerArry = [];


}

statistics(input);