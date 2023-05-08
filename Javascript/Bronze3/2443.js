// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "5".toString().trim();

function drawStars6(input) {
    for(let i = input; i >= 1; i--) {
        console.log(" ".repeat(input - i) + "*".repeat(i * 2 - 1));
    }
}

drawStars6(input);