// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "3".toString().trim();

function mathIsPe(input) {
    return input % 8 === 0 ? 2 : input % 8 === 7 ? 3 : input % 8 === 6 ? 4 : input % 8;
}

console.log(mathIsPe(input));