// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "-2 5".toString().trim().split(" ");

function calcPopularity(input) {
    let aDomain = input[0];
    let bDomain = input[1];
    let answer = Math.abs(aDomain - bDomain);

    console.log(answer);
}

calcPopularity(input);