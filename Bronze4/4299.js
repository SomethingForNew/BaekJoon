// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "3 1".toString().trim().split(" ");

function AFCWimbledon(input) {
    const [sum, difference] = input.map(Number);
    const A = (sum + difference) / 2;
    const B = sum - A;

    if(A < 0 || B < 0 || Math.floor(A) !== A) {
        return -1;
    } else {
        return `${A} ${B}`;
    }
}

console.log(AFCWimbledon(input));