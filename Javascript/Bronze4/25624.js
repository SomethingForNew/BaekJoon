// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "10 3".toString().trim().split(" ");

function SNUPC(input) {
    const [x, y] = input.map(Number);

    return y <= x ? x + y : y - x;
}

console.log(SNUPC(input));