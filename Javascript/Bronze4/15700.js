// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "1 2".toString().trim().split(" ");

function fillTiles(input) {
    const [N, M] = input.map(BigInt);

    return BigInt(N * M / 2n).toString();
}

console.log(fillTiles(input));