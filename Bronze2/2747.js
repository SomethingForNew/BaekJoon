// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "10".toString().trim();

function fibonacciNumber(input) {
    let fibo = [0, 1];

    for (let i = 2; i <= Number(input); i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }

    console.log(fibo[Number(input)]);
}

fibonacciNumber(input);