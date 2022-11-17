// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim();

function telemarketerOrNot(input) {
    const [A, B, C, D] = input.split("\n").map(Number);

    if(A === 8 || A === 9) {
        if(B === C) {
            if(D === 8 || D === 9) {
                return "ignore";
            } else {
                return "answer";
            }        
        } else {
            return "answer";
        }
    } else {
        return "answer";
    }
}

console.log(telemarketerOrNot(input));