// const input  = require("fs").readFileSync("/dev/stdin").toString();
const input = "baekjoon".toString();

function findAlphabet(input) {
    let testCaseArr = input.split("");
    let alphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let answerArr = [];

    for(i = 0; i < alphabetArr.length; i++) {
        let alpahbetIdx = testCaseArr.findIndex(element => element === alphabetArr[i]);
        answerArr.push(alpahbetIdx);
    }

    console.log(answerArr.join(" "));
}

findAlphabet(input);