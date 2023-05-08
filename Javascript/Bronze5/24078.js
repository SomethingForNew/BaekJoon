// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = "42".toString();

function 余り(input) {
    return Number(input) % 21;
}
console.log(余り(input));