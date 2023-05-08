// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input  = "5".toString().trim();

function printStars(input) {
    const n = +input;
    
    for(let i = n; i >= 1; i--){
        console.log("*".repeat(i));
    }
}

printStars(input);