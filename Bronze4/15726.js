// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "32 16 8".toString().trim().split(" ");

function notArithmeticOperation(input) {
    const [A, B, C] = input.map(Number);
    const TEMP1 = Math.floor(A * B / C);
    const TEMP2 = Math.floor(A / B * C);

    return TEMP1 > TEMP2 ? TEMP1 : TEMP2;
}

console.log(notArithmeticOperation(input));