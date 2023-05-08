// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim();

function devideIntoTeams(input) {
    const [A, B, C, D] = input.split(" ").map(Number);

    return Math.abs((A + D) - (B + C));
}

console.log(devideIntoTeams(input));