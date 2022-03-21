// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10".toString().trim().split("\n");
// const input = "42\n84\n252\n420\n840\n126\n42\n84\n420\n126".toString().trim().split("\n");
const input = "39\n40\n41\n42\n43\n44\n82\n83\n84\n85".toString().trim().split("\n");

function getRestNum(input) {
    let numArr = input.map(element => element % 42);
    let numSet = new Set(numArr);
    let answerArr = [...numSet];

    console.log(answerArr.length);
}

getRestNum(input);