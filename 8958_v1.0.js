// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "5\nOOXXOXXOOO\nOOXXOOXXOO\nOXOXOXOXOXOXOX\nOOOOOOOOOO\nOOOOXOOOOXOOOOX".toString().split("\n");

function sumScore(input) {
    let testCase = input[0];

    for(let i = 1; i <= testCase; i++) {
        let count = 0;
        let sum   = 0;

        for(let j = 0; j < input[i].length; j++) {
            // if(input[i][j] === "O") {
            //     count ++;
            // } else {
            //     count = 0;
            // }

            // sum += count;

            input[i][j] === "O" ? count++ : count = 0;
            sum += count;
        }
        console.log(Number(sum));
    }
}

sumScore(input);