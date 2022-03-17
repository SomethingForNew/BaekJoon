// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "5\n54321".toString().split("\n");

function addAllNumber(input) {
    let length  = Number(input[0]);
    let numbers = input[1].split("");
    let answer = 0;

    for(let i = 0; i < length; i ++) {
        answer += Number(numbers[i]);
    }
    console.log(answer);
}

addAllNumber(input);