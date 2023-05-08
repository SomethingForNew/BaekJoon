// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = "90 0".toString();

function defenseIgnore(input) {
    const [a, b] = input.split(" ").map(v => Number(v));

    return a - (a * (b / 100)) >= 100 ? 0 : 1;
}

console.log(defenseIgnore(input));