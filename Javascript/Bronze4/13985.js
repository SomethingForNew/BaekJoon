// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input  = "2 + 2 = 5".toString().trim().split(" ");

function equality(input) {
    const a = +input[0];
    const b = +input[2];
    const sum = +input[4];
    const answer = a + b === sum ? "YES" : "NO";

    console.log(answer);
}

equality(input);