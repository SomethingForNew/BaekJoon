// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function sangGeunSFriends(input) {
    let answerArray = [];

    for(let i = 0; i < input.length; i++) {
        if(input[i].split(" ")[0] !== "0") {
            console.log(+input[i].split(" ")[0] + +input[i].split(" ")[1]);
        }
    }
}

sangGeunSFriends(input);