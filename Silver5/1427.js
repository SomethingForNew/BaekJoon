// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = "500613009".toString().trim().split("");

function sortNumber(input) {
    let answer = input.sort((a, b) => {return b - a});

    console.log(answer.join(""));
}

sortNumber(input);