// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function homework(input) {
    const L = Number(input[0]);
    const TOTAL_KOR_PAGE  = Number(input[1]);
    const TOTAL_MATH_PAGE = Number(input[2]);
    const KOR_ONEDAY_MAX  = Number(input[3]);
    const MATH_ONEDAY_MAX = Number(input[4]);

    const KOR  = Math.ceil(TOTAL_KOR_PAGE / KOR_ONEDAY_MAX);
    const MATH = Math.ceil(TOTAL_MATH_PAGE / MATH_ONEDAY_MAX);
    
    console.log(KOR > MATH ? L - KOR : L - MATH);

}

homework(input);