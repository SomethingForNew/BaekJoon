// const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, ...input] = require("fs")
  .readFileSync("./testCase.txt")
  .toString()
  .split("\n");

function coloredPaper(N, input) {
  let answer = 0;
  const tempArr = Array.from(Array(100), () => Array(100).fill(0));

  for (let i = 0; i < N; i++) {
    const [ROW, COLUM] = input[i].split(" ").map(Number);

    for (let j = ROW; j < ROW + 10; j++) {
      for (let k = COLUM; k < COLUM + 10; k++) {
        if (++tempArr[j][k] == 1) {
          answer += 1;
        }
      }
    }
  }

  return answer;
}

console.log(coloredPaper(N, input));
