// 부분 합격(40점)
// const input  = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const input = "1 2".toString().split(" ");

function aPlusB(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    console.log(a + b);
}

aPlusB(input);