// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "1 2 2".toString().trim();

function threeIntegers(input) {
    const result = count(input);
    console.log(result[1] > result[2] ? 1 : 2);
}

function count(input) {
    return input.split(" ")
                .map(Number)
                .reduce((arr = [0, 0, 0], testCase) => arr[testCase]++);
}

threeIntegers(input);