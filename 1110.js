// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const input = "26".toString();

function addFunction(input) {
    let num    = Number(input);
    let sum    = 0;
    let answer = 0;

    while (true) {
        sum = Math.floor(num / 10) + num % 10;
        num = (num % 10 ) * 10 + sum % 10;
        
        answer++;
        
        if(Number(input) === num)
            break;
    }

    console.log(answer);
}

addFunction(input);