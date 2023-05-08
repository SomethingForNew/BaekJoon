// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "5".toString().trim();

function drawStars8(input) {
    for(let i = 1; i <= input - 1; i++) {
        console.log("*".repeat(i) + " ".repeat((input * 2) - (i * 2)) + "*".repeat(i));
    }

    for(let i = input; i >= 1; i--) {
        console.log("*".repeat(i) + " ".repeat((input * 2) - (i * 2)) + "*".repeat(i));
    }
}

drawStars8(input);