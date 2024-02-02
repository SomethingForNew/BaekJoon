// const [N, ...coordinate] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, ...coordinate] = require("fs")
  .readFileSync("./testCase.txt")
  .toString()
  .trim()
  .split("\n");

const xArry = [];
const yArry = [];

coordinate.map((v) => {
  xArry.push(v.split(" ")[0]);
  yArry.push(v.split(" ")[1]);
});

const xMax = Math.max.apply(null, xArry);
const xMin = Math.min.apply(null, xArry);
const yMax = Math.max.apply(null, yArry);
const yMin = Math.min.apply(null, yArry);

console.log((xMax - xMin) * (yMax - yMin));
