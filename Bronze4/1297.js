// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "52 9 16".toString().trim().split(" ");

function tvInch(input) {
    const D = Number(input[0]);
    const H = Number(input[1]);
    const W = Number(input[2]);
    const X = D / (H ** 2 + W ** 2) ** 0.5;
    const answer = [];

    answer.push(Math.floor(H * X));
    answer.push(Math.floor(W * X));

    console.log(answer.join(" "));
}

tvInch(input);