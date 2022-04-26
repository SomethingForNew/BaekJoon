// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function orderByAge(input) {
    input.shift();

    let answerArr = input.sort(function(a, b) {
        let aAge = a.split(" ")[0];
        let bAge = b.split(" ")[0];

        return aAge - bAge;
    });

    console.log(answerArr.join("\n"));
}

orderByAge(input);