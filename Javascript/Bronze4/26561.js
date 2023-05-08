// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function population(input) {
    const [N, ...TESTCASEARR] = input;

    for(let i = 0; i< N; i++) {
        console.log( Number(TESTCASEARR[i].split(" ")[0]) + ( Math.floor(Number(TESTCASEARR[i].split(" ")[1] / 4)) - Math.floor(Number(TESTCASEARR[i].split(" ")[1] / 7))) );
    }
}

population(input);