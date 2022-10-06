// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function identifyingTea(input) {
    const [T, testCase] = input;

    /*
        let cnt = 0;

        for(let i = 0; i < testCase.split(" ").length; i++) {
            if(Number(testCase.split(" ")[i]) === Number(T)) {
                cnt += 1;
            }
        }

        return cnt;
     */

    return testCase.split(" ").filter(tea => Number(tea) === Number(T)).length;
}

console.log(identifyingTea(input));