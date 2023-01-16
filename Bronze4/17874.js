// const input  = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
const input = "4 2 1".toString().split(" ").map(Number);

function pieceOfCake(input) {
    const [n, h, v] = input;

    let width = n - v < v ? v : n - v;
    let height = n - h < h ? h : n - h;

    return width * height * 4;
}

console.log(pieceOfCake(input));