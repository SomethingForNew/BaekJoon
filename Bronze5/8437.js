// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "10\n2".toString().split("\n");

function Julka(input) {
    const sum = BigInt(input[0]);
    const K = BigInt(input[1]);
    const Natalia = ((sum - K) / 2n).toString();
    const Klaudia = ((sum + K) / 2n).toString();

    console.log(`${Klaudia}\n${Natalia}`);
}

Julka(input);