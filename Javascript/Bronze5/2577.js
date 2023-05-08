// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "150\n266\n427".toString().split("\n");

function countNumbers(input) {
    let a = input[0];
    let b = input[1];
    let c = input[2];
    let answer = (a * b * c).toString();

    for(let i = 0; i <= 9; i++) {
        console.log(answer.split(i).length -1);
    }
}

countNumbers(input);