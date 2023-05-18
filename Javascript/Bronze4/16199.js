// const [BIRTH, CURRENT_DATE] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [BIRTH, CURRENT_DATE] = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");
const [B_YEAR, B_MONTH, B_DAY] = BIRTH.split(" ").map(Number);
const [C_YEAR, C_MONTH, C_DAY] = CURRENT_DATE.split(" ").map(Number);

let 만나이 = 0;
let 세는나이 = C_YEAR - B_YEAR + 1;
let 연나이 = C_YEAR - B_YEAR;

if(B_MONTH < C_MONTH) {
    만나이 = C_YEAR - B_YEAR;
} else if(B_MONTH === C_MONTH && B_DAY <= C_DAY) {
    만나이 = C_YEAR - B_YEAR;
} else {
    만나이 = C_YEAR - B_YEAR - 1;
}

console.log(만나이);
console.log(세는나이);
console.log(연나이);