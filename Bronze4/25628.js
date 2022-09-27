// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "5 4".toString().trim().split(" ");

function buger(input) {
    const [A, B] = input.map(Number);

    return Math.floor(Math.min(A / 2, B));
}

console.log(buger(input));