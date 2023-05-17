// const [N, M, K] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [N, M, K] = "7 5 2".toString().trim().split(" ").map(Number);
console.log(Math.min(M, K) + Math.min(N - M, N - K));