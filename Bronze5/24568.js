// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = "2\n5".toString().trim().split("\n");
function cupcakeParty(input) {
    const R = Number(input[0]);
    const S = Number(input[1]);

    return Math.max((R * 8 + S * 3) - 28, 0);
}

console.log(cupcakeParty(input));