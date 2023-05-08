// const input  = require("fs").readFileSync("/dev/stdin").toString();
const input = "4\n20\n8".toString();

function РАВЕНСТВО(input) {
    const testCase = input.split("\n");
    const a = BigInt(testCase[0]);
    const b = BigInt(testCase[1]);
    const c = BigInt(testCase[2]);

    return ((b - c) / a).toString();
}

console.log(РАВЕНСТВО(input));