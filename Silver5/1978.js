// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = "4\n1 3 5 7".toString().trim().split("\n");
// const input  = "60\n1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60".toString().trim().split("\n");

function isPrimeNum(testCase) {
    for(let i = 2; testCase > i; i++) {
        if(testCase % i === 0) {
            return false;
        }

    }
    return testCase > 1;
}

function findDecimal(input) {
    let testCaseCnt = Number(input[0]);
    let testCase    = input[1].split(" ").map(element => Number(element));
    let answerArr   = [];
    
    for(let i = 0; i <= testCaseCnt; i++) {
        if(isPrimeNum(testCase[i]))
            answerArr.push(testCase[i]);
    }

    console.log(answerArr.length);
}

findDecimal(input);