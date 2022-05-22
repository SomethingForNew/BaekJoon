// const input  = require("fs").readFileSync("/dev/stdin").toString().split(" );
const input = "2 5 3 20".toString().split(" ");

function plane(input) {
    const n1 = +input[0];
    const k1 = +input[1];
    const n2 = +input[2];
    const k2 = +input[3];

    console.log((n1 * k1) + (n2 * k2));
}

plane(input);