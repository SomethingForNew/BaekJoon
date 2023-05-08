// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "1\n2".toString().split("\n");


function aPlusB(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    console.log(a + b);
}

aPlusB(input);