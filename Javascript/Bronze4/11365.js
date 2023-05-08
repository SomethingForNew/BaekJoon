// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function topSecret(input) {
    let tempArr = [];

    for(let i = 0; i < input.length - 1; i++) {
        for(let j = input[i].length - 1; j >= 0; j--) {
            tempArr.push(input[i][j]);
        }
        tempArr.push('\n');
    }

    return tempArr.join("");
}

console.log(topSecret(input));