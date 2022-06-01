// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "3".toString().trim();

function drawStars13(input) {
    for(let i = 1; i <= input; i++) {
        console.log("*".repeat(i));
    }

    for(let i = input - 1; i >= 1; i--) {
        console.log("*".repeat(i));
    }
}

drawStars13(input);