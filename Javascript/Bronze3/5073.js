// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync("./testCase.txt")
  .toString()
  .trim()
  .split("\n");

const result = [];

input.pop();

for (let el of input) {
  const testCase = el.split(" ").map(Number);

  testCase.sort((a, b) => a - b);

  if (testCase[0] + testCase[1] <= testCase[2]) {
    result.push("Invalid");
    continue;
  }

  const set = new Set(testCase); // 같은 값은 하나만 저장되는 집합의 성질 이용

  if (set.size === 1) {
    result.push("Equilateral");
  } else if (set.size === 2) {
    result.push("Isosceles");
  } else {
    result.push("Scalene");
  }
}
console.log(result.join("\n"));
