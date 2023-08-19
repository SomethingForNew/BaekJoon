// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs")
  .readFileSync("./BaekJoon/Javascript/testCase.txt")
  .toString()
  .split("\n");

function changeBalls(input) {
  const [N, M] = input[0].split(" ").map(Number);
  let nArr = Array(N)
    .fill(1)
    .map((a, b) => a + b);

  for (let i = 1; i <= M; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    let tempNumber = nArr[x - 1];

    nArr[x - 1] = nArr[y - 1];
    nArr[y - 1] = tempNumber;
  }

  console.log(nArr.join(" "));
}

changeBalls(input);
