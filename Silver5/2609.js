// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = "24 18".toString().trim().split(" ");

function findMaxCommonDivisor(a, b) {

    // 1. 반복문 방식
    while(b !== 0) {
        r = a % b;
        a = b;
        b = r;
    }
    return a;
    
    // 2. 재귀 방식
    // if(b === 0) {
    //     return a;
    // } else {
    //     return findMaxCommonDivisor(b, a % b);
    // }
}

function findMinCommonMultiple(a, b) {
    return a * b / findMaxCommonDivisor(a, b);
}

function findOutMaxMin(input) {
    let a = Math.max.apply(null, input);
    let b = Math.min.apply(null, input);

    console.log(findMaxCommonDivisor(a, b));
    console.log(findMinCommonMultiple(a, b));
}

findOutMaxMin(input);