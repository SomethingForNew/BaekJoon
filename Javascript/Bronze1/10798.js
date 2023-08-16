// const testCase = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const testCase = require("fs").readFileSync("./BaekJoon/Javascript/testCase.txt").toString().trim().split("\n");

function verticalReading(testCase) {
    const maxLength = Math.max(...testCase.map(el => el.length));
    let answer = '';
    
    for(let i = 0; i < maxLength; i++) {
        for(let j = 0; j < testCase.length; j++) {
            answer += testCase[j][i] || '';
        }
    }

    console.log(answer);
}

verticalReading(testCase);