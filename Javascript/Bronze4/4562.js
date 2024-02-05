// const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, ...input] = require("fs")
  .readFileSync("./testCase.txt")
  .toString()
  .trim()
  .split("\n");

input.map((v) => {
  const [x, y] = v.split(" ").map(Number);

  console.log(x >= y ? "MMM BRAINS" : "NO BRAINS");
});
