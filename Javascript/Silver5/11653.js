// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input  = "72".toString().trim();

function primeFactorization(input) {
    let i = 2;

    while(input > 1) {
        if(input % i === 0) {
            console.log(i);
            input = input / i;
        } else {
            i++;
        }
    }
}

primeFactorization(input);