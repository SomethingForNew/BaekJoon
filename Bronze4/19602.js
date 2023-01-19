// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
const input = "3\n2\n1".toString().split("\n").map(Number);

function dogTreats(input) {
    const [S, M, L] = input;

    return (1 * S) + (2 * M) + (3 * L) >= 10 ? "happy" : "sad";
}

console.log(dogTreats(input));