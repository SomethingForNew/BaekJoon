// const input  = require("fs").readFileSync("/dev/stdin").toString();
const input = require("fs").readFileSync("./testCase.txt").toString();

function putInBalls(input) {
  const [N, M] = input.split("\n")[0].split(" ").map(Number);
  const basket = new Array(N).fill(0);

  for (let i = 1; i <= M; i++) {
    const [I, J, K] = input.split("\n")[i].split(" ").map(Number);

    for (let j = I; j <= J; j++) {
      basket[j - 1] = K;
    }
  }

  return basket.join(" ");
}

console.log(putInBalls(input));
