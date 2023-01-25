// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n").map(Number);

function oddities(input) {
    const [n, ...xArr] = input;

    for(let i = 0; i < n; i++) {
        if(xArr[i] % 2 !== 0) {
            console.log(`${xArr[i]} is odd`);
        } else {
            console.log(`${xArr[i]} is even`);
        }
    }
}

oddities(input);