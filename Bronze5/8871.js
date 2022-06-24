// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "5".toString().trim();

function ZadaniePróbne(input) {
    const totalRound = Number(input) + 1;
    const min = totalRound * 2;
    const max = totalRound * 3;

    console.log(`${min} ${max}`);
}

ZadaniePróbne(input);