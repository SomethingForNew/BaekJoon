// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function triangles(input) {
    for(let i = 0 ; i < input.length; i++) {
        let a = "";

        for(let j = 1; j <= input[i]; j++) {
            a += "*";
            console.log(a);
        }
    }
}

triangles(input);