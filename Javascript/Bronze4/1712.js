// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const input  = "1000 70 170".toString().trim().split(" ");

function breakEvenPoint(input) {
    let A = Number(input[0]);
    let B = Number(input[1]);
    let C = Number(input[2]);
    let evenPoint = A / (C - B);

    B >= C ? answer = -1 : answer = Math.floor(evenPoint) + 1;

    console.log(answer);
}

breakEvenPoint(input);