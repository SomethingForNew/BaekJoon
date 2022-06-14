// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");
function bigger(input) {
    for(let i = 0; i < input.length - 1; i++) {
        if(Number(input[i].split(" ")[0]) > Number(input[i].split(" ")[1])) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}

bigger(input);