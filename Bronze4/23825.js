const { off } = require("process");

// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "4 5".toString().trim().split(" ");

function SASA(input) {
    const N = +input[0];
    const M = +input[1];

    console.log(N, M);
    console.log(5 % 2);
}

SASA(input);