// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "1 1".toString().trim().split(" ").map(Number);

function CASIO(input) {
    const [N, M] = input;
    return N === M ? 1 : 0;
}

console.log(CASIO(input));