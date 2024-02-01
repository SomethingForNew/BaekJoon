// const inputArr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const inputArr = require("fs")
  .readFileSync("./testCase.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < inputArr.length - 1; i++) {
  const divisors = [1];

  for (let j = 2; j <= Math.sqrt(inputArr[i]); j++) {
    if (inputArr[i] % j === 0) {
      divisors.push(j);
      divisors.push(inputArr[i] / j);
    }
  }

  if (divisors.reduce((acc, cur) => acc + cur, 0) === inputArr[i]) {
    console.log(
      `${inputArr[i]} = ${divisors.sort((a, b) => a - b).join(" + ")}`
    );
  } else {
    console.log(`${inputArr[i]} is NOT perfect.`);
  }
}
