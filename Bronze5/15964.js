// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "3 4".toString().trim().split(" ");

function strangeSign(input) {
    const A = Number(input[0]);
    const B = Number(input[1]);

    return (A + B) * (A - B);
}

console.log(strangeSign(input));