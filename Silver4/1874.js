// const [N, ...TESTCASE] = require("fs").readFileSync("/dev/stdin").toString().trim();
const [N, ...TESTCASE] = require("fs").readFileSync("./testCase/testCase.txt").toString().trim().split("\n");

function stackSequence(){
    const NUM_ARR = TESTCASE.map(v => Number(v));
    let tempArr = [];
    let answerArr = [];
    let cnt = 1;

    for(let i = 0; i < N; i++) {
        const compareNumber = NUM_ARR.shift();

        while(cnt <= compareNumber) {
            tempArr.push(cnt++);
            answerArr.push("+");
        }

        if(tempArr.pop() !== compareNumber) {
            return "NO";
        }

        answerArr.push("-");
    }

    return answerArr.join("\n");
}

console.log(stackSequence());