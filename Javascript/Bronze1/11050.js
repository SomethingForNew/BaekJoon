// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input  = "5 2".toString().trim().split(" ");

function binomialCoefficient(input) {
    const n = Number(input[0]);
    const k = Number(input[1]);
    let nFactorial = 1;
    let kFactorial = 1;
    let mFactorial = 1;
    let answer = 0;

    for(let i = 1; i <= n; i++) {
        nFactorial *= i;
    }

    for(let j = 1; j <= k; j++) {
        kFactorial *= j;
    }

    for(let q = 1; q <= n - k; q++) {
        mFactorial *= q;
    }

    answer += nFactorial / (kFactorial * mFactorial);

    console.log(answer);
}


binomialCoefficient(input);