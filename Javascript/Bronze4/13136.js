// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split(" ");

function doNotTouchAnything(input) {
    const [R, C, N] = input.map(Number);

    const x = Math.ceil(R / N);
    const y = Math.ceil(C / N);

    return x * y;
}

console.log(doNotTouchAnything(input));