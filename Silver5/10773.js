// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\r\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\r\n");

function zero(input) {
    let testCaseCnt = input[0];
    let a = [];

    for(let i = 1; i <= testCaseCnt; i++) {
        if(input[i] != "0") {
            a.push(input[i]);
        } else if (input[i] === "0") {
            a.pop();
        }
    }

    if(a.length < 1) {
        return console.log(0);
    } else {
        let answer = 0;
        a.forEach(element => {
            answer += +element;
        })
        return console.log(answer);
    }
}

zero(input);