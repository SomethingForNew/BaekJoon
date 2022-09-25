// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "1".toString().trim();

function greenTower(input) {
    return Math.pow(2, Number(input));
}

console.log(greenTower(input));