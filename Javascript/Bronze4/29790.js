// const [N, U, L] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
const [N, U, L] = "600 8500 270".toString().split(" ").map(Number);
let count = 0;

if (N >= 1000) {
  count = 1;
} else {
  console.log("Bad");
}

if (count === 1 && (U >= 8000 || L >= 260)) {
  count += 1;
}

if (count === 1) {
  console.log("Good");
} else if (count === 2) {
  console.log("Very Good");
}
