// const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number).sort((a, b) => {return b - a});
const input = "70 100 70".toString().split(" ").map(Number).sort((a, b) => {return b - a});

function exam(input) {
    return input[0] + input [1];
}

console.log(exam(input));