// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "3".toString().trim();

function drawStars12(input) {
    for(let i = 1; i <= input; i++) {
        console.log(" ".repeat(input - i) + "*".repeat(i));
    }

    for(let i = input - 1; i >= 1; i--) {
        console.log(" ".repeat(input - i) + "*".repeat(i));
    }
}

drawStars12(input);