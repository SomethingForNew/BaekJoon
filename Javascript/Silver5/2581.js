// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = "60\n100".toString().trim().split("\n");
const M = Number(input[0]);
const N = Number(input[1]);
const primeNumArr = arrMtoN(M, N);

function arrMtoN(M, N) {
    const primeNumArr = [];

    for(let i = M; i <= N; i++) {
        if(isPrimeNum(i)) {
            primeNumArr.push(i);
        }
    }

    return primeNumArr.sort((a, b) => {return a - b});
}

function isPrimeNum(testCase) {
    for(let i = 2; testCase > i; i++) {
        if(testCase % i === 0) {
            return false;
        }
    }
    return testCase > 1;
}

function getSumPrime() {
    let sum = 0;

    for(let i = 0; i < primeNumArr.length; i++) {
        sum += primeNumArr[i];
    }

    return sum;
}

function getMinPrime() {
    return primeNumArr[0];
}

function printAnswer() {
    if(getSumPrime() !== 0 && getMinPrime() !== undefined) {
        console.log(getSumPrime() + "\n" + getMinPrime());
    } else {
        console.log(-1);
    }
}

printAnswer();