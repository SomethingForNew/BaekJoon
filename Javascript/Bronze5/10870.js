// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "10".toString().trim();

function fibonacci(input) {
    if(input == 0) {
        return 0;
    } else if(input == 1 || input == 2) {
        return 1;
    } else {
        return fibonacci(input - 1) + fibonacci(input - 2);
    }
}

console.log(fibonacci(input));