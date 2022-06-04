// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");

function afterParty(input) {
    const L = input[0].split(" ").map(Number)[0];
    const P = input[0].split(" ").map(Number)[1];
    const people = input[1].split(" ").map(Number);

    console.log(people.map(v => v - (L * P)).join(" "));
}

afterParty(input);