// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");

function shares(input) {
    let arr = [];
    for(let i = 0; i < input.length; i++) {
        const [N, S] = input[i].split(" ").map(v => Number(v));

        console.log(Math.floor( S / ( N + 1 ) ));
    }
}

shares(input);