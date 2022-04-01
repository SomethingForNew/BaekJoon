// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "9223372036854775807 9223372036854775808".toString().trim().split(" ");

function aPlusB(input) {
    let a = BigInt(input[0]);
    let b = BigInt(input[1]);

    console.log((a + b).toString());
}

aPlusB(input);