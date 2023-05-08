// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "2 7".toString().trim().split(" ");

function tomAndJerry(input) {
    const A = Number(input[0]);
    const B = Number(input[1]);

    console.log(B - A, B);
}

tomAndJerry(input);