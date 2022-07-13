// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const input = "15 18 11".toString().trim().split(" ").map(Number);

function rats(input) {
    console.log(Math.floor(((input[0] + 1) * (input[1] + 1)) / (input[2] + 1) - 1));
}

rats(input);