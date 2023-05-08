// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim();

function veraAndOutfits(input) {
    return Number(input) * (Number(input) - 1);
}

console.log(veraAndOutfits(input));