// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = "1".toString();

function factorial2(input) {
  const N = Number(input);
  let result = 1;

  for (let i = 1; i <= N; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial2(input));
