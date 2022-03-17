// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "5\nOOXXOXXOOO\nOOXXOOXXOO\nOXOXOXOXOXOXOX\nOOOOOOOOOO\nOOOOXOOOOXOOOOX".toString().split("\n");

function sumScore(input) {
    let testCase = input[0];
    
    for(let i = 1; i <= testCase; i++) {
        let count = 0;
        let sum   = 0;

        input[i].split("").forEach(element => {
            element === "O" ? count++ : count = 0;
            sum += count;
        });

        console.log(sum);
    }
}

sumScore(input);