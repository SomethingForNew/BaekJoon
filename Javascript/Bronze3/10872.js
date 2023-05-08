// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input  = "12".toString().trim();

function factorial(input) {
    let answer = 1;

    for(let i = 1; i <= input; i++) {
        answer *= i;
    }

    console.log(answer);
}

factorial(input);