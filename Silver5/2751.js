// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\r\n");

function sortNumber(input) {
    input.shift();

    let numArr = input.map(element => Number(element));
    let sortArr = numArr.sort((a, b) => a - b);

    console.log(sortArr.join("\n"));
}

sortNumber(input);