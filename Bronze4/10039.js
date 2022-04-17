// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function getAvg(input) {
    let testCase = input.map(element => Number(element));
    let sum = 0;

    for(let i = 0; i < testCase.length; i ++) {
        if(testCase[i] < 40)
            testCase[i] = 40;
        
        sum += testCase[i];
    }

    console.log(sum / input.length);
}

getAvg(input);