// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function iGuessOverTheAvg(input) {
    for(let i = 1; i <input.length; i++) {
        let testCase = input[i].split(" ");
        let numOfStudents = testCase[0];
        let sum = 0;
        
        testCase.shift();

        for(let j = 0; j < numOfStudents; j++) {
            sum += Number(testCase[j]);
        }

        let avg = sum / numOfStudents;
        let overAvgCnt = 0;

        for(let k = 0; k < numOfStudents; k++) {
            if(testCase[k] > avg)
                overAvgCnt++;
        }
        console.log(`${(overAvgCnt / testCase.length * 100).toFixed(3)}%`);
    }
}

iGuessOverTheAvg(input);