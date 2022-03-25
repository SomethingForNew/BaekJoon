// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "2\n3 ABC\n5 /HTP".toString().split("\n");

function printString(input) {
    let testCase = Number(input[0]);

    for(let i = 1; i <= testCase; i++) {
        let times    = input[i].split(" ")[0];
        let exString = input[i].split(" ")[1];
        let answer   = exString.split("").map(x => x.repeat(times)).join(""); 

        console.log(answer);
    }
}

printString(input);