// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "abc".toString().trim();

function ZadaniePróbne(input) {
    console.log(input.split("").reverse().join(""));
}

ZadaniePróbne(input);