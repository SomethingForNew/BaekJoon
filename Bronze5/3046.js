// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "11 15".toString().split(" ");
// const input = "4 3".toString().split(" ");

function getR2Number(input) {
    let r1 = Number(input[0]);
    let s  = Number(input[1]);
    let answer = (s * 2) - r1;

    console.log(answer);
}

getR2Number(input);