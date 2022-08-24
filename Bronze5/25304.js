// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function bill(input) {
    const [total, stuffCnt, ...arr] = input;
    let sumAmt = 0;

    for(let i = 0; i < stuffCnt; i++) {
        sumAmt += Number(arr[i].split(" ")[0]) * Number(arr[i].split(" ")[1]);
    }

   return Number(total) === sumAmt ? "Yes" : "No";
}

console.log(bill(input));