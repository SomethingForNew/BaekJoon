// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "300 4 1000".toString().trim();
// const input = "20 6 120".toString().trim();
// const input = "20 10 320".toString().trim();

function snack(input) {
    const [K, N, M] = input.split(" ").map(Number);

    return (K * N) - M < 0 ? 0 : (K * N) - M;
}

console.log(snack(input));