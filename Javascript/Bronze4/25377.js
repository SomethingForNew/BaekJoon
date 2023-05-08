// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs")
  .readFileSync("testCase/testCase.txt")
  .toString()
  .trim()
  .split("\n");

function bread(input) {
  const [N, ...TEST_CASE] = input;
  const MAX = 1001;
  let answer = MAX;

  for (let i = 0; i < N; i++) {
    let A = Number(TEST_CASE[i].split(" ")[0]);
    let B = Number(TEST_CASE[i].split(" ")[1]);

    if (A <= B && answer >= B) {
      answer = Math.min(MAX, B);
    }
  }

  if (MAX === answer) {
    return -1;
  } else {
    return answer;
  }
}

console.log(bread(input));
