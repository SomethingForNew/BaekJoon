// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "0 0 0 23 3 100".toString().trim();

function bottleReturn(input) {
    const ANSWER = input.split(" ").map(v => Number(v)).reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0);

    return ANSWER * 5;
}

console.log(bottleReturn(input));