// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "1000 100".toString().trim().split(" ");

function veryRich2(input) {
    const n = BigInt(input[0]);
    const m = BigInt(input[1]);
    const a = (n / m).toString();
    const b = (n % m).toString();

    console.log(`${a}\n${b}`);
}

veryRich2(input);