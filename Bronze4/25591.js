// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input ="19 32".toString().trim().split(" ");

function indiaMath(input) {
    const [N1, N2] = input.map(Number);
    const ANSWER_ARR = [];

    let a = 100 - N1;
    let b = 100 - N2;
    let c = 100 - (a + b);
    let d = a * b;
    let q = Math.floor(d / 100);
    let r = d % 100;

    ANSWER_ARR.push(a, b, c, d, q, r);

    return ANSWER_ARR.join(" ").concat("\n", c + q, " ", r);
}

console.log(indiaMath(input));