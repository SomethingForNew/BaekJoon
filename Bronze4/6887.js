// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = "9".toString();

function squares(input) {
    return `The largest square has side length ${~~Math.sqrt(Number(input))}.`;
}

console.log(squares(input));