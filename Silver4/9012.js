// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");
[n, ...testCases] = input;

function findNumber(n ,testCases) {
    for(let i = 0; i < n; i++) {
        const testCase = testCases[i];
        const tempStack = [];
        let result = "YES";

        for(let j = 0; j < testCase.length; j++) {
            if(testCase[j] === "(") {
                tempStack.push(testCase[j]);
            } else if(testCase[j] ===")") {
                if(!tempStack.pop()) {
                    result = "NO";
                    break;
                }
            }
        }

        if(tempStack.length !== 0) {
            result = "NO";
        }
        console.log(result);
    }
}

findNumber(n, testCases);