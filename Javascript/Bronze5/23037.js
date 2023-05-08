// const input  = require("fs").readFileSync("/dev/stdin").toString();
const input = "93084".toString().split("").map(v => Number(v));

function number5(input) {
    let answer = 0;

    for(let i = 0; i < input.length; i++) {
        answer += Math.pow(input[i], 5);
    }

    console.log(answer);
}

number5(input);