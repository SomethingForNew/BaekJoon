// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = "50 75 200".toString().trim().split(" ");

function paris(input) {
    const [S, T, D] = input.map(Number);

    return D / (S * 2) * T;
}

console.log(paris(input));