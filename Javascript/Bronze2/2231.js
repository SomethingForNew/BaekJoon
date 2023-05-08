// const input  = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const input = Number("216".toString().trim());

function bruteForce(number) {
  let numSum = number
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  return numSum + number;
}

for (let i = 1; i <= input; i++) {
  if (bruteForce(i) === input) return console.log(i);

  if (i === input) return console.log(0);
}
