// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim();

function zeroOrOne(input) {
    const [A, B, C] = input.split(" ");

    if(A !== B && B === C) {
        return "A";
    }

    if(A !== B && B !== C) {
        return "B";
    }

    if(A === B && B !== C) {
        return "C";
    }

    if(A === B && B === C) {
        return "*";
    }
}

console.log(zeroOrOne(input));