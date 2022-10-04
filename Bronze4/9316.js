// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "3".toString().trim();

function helloJudge(input) {
    for(let i = 1; i <= input; i++) {
        console.log(`Hello World, Judge ${i}!`);
    }
}

helloJudge(input);