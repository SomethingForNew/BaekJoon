// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = "20000303200003032000030320000303200003032000030320000303200003032000030320000303".toString().trim().split(" ");

function bigNumber(input) {
    let answer = BigInt(input) % BigInt("20000303"); 
    
    console.log(answer.toString());
}

bigNumber(input);