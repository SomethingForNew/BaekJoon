// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "4".toString().trim();

function silnia(input) {
    let temp = BigInt(1);

    for(let i = 1; i <= input; i++) {
        temp *= BigInt(i);
    }

    return temp.toString().substring(temp.toString().length - 1);
}

console.log(silnia(input));