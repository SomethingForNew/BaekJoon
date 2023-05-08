// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input  = "5".toString().trim();

function drawStars4(input) {
    const n = +input;

    for(let i = 0; i <= n; i++){
        console.log(" ".repeat(i) + "*".repeat(n - i));
    }
}

drawStars4(input);