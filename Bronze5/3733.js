// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function shares(input) {
    for(let i = 0; i < input.length; i++) {
        const [N, S] = input[i].split(" ").map(v => Number(v));

        console.log(Math.floor( S / ( N + 1 ) ));
    }
}

shares(input);