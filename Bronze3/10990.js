// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "4".toString().trim();

function drawStars15(input) {
    let tempArr = [];

    tempArr.push(" ".repeat(input - 1) + "*" + "\n");

    for(let i = 1; i < input; i++) {
        if(i === input - 1) {
            tempArr.push(" ".repeat(Number(input) - i - 1) + "*" + " ".repeat(i * 2 - 1) + "*");
        } else {
            tempArr.push(" ".repeat(Number(input) - i - 1) + "*" + " ".repeat(i * 2 - 1) + "*" + "\n");
        }
    }

    console.log(tempArr.join(""));
}

drawStars15(input);