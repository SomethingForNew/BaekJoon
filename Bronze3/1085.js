// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input  = "6 2 10 3".toString().trim().split(" ");

function chess(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let w = Number(input[2]);
    let h = Number(input[3]);
    let arr = [x, y, w - x, h -y];

    console.log(Math.min.apply(null, arr));
}

chess(input);