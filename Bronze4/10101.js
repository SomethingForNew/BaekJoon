// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function triangle(input) {
    const inputs = input.map(Number);
    const sum = inputs.reduce((acc, cur) => acc + cur);
    const set = new Set(inputs);

    if(sum !== 180) {
        console.log("Error");
    } else if(set.size === 1) {
        console.log("Equilateral");
    } else if(set.size === 2) {
        console.log("Isosceles");
    } else if(set.size === 3) {
        console.log("Scalene");
    }
}

triangle(input);