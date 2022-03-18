// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const input = "".toString().trim().split(" ");

function countTheWordsInString(input) {
    let answer = input[0] === "" ? 0 : input.length;

    console.log(answer);
}

countTheWordsInString(input);