// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "4 5".toString().trim().split(" ");

function SASA(input) {
    return Math.floor(Math.min.apply(null, input) / 2);
}

console.log(SASA(input));