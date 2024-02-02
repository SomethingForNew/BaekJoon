// const n = require("fs").readFileSync("/dev/stdin").toString()
const n = require("fs").readFileSync("./testCase.txt").toString();

let num = 0;

for (let i = 1; i <= n - 1; i++) {
  num += i;
}

console.log(`${num}
2`);
