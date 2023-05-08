// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function chicken(input) {
    const [N, ...TESTCASE] = input;
    const TESTCASEARR = TESTCASE.toString().split(" ").map(Number);
    let answer = 0;

    TESTCASEARR.forEach(element => {
        if(element <= N) {
            answer += element;
        } else if(element > N) {
            answer += Number(N);
        }
    });

    return answer;
} 

console.log(chicken(input));