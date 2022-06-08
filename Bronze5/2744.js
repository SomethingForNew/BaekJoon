// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "WrongAnswer".toString().trim();

function upperLower(input) {
    const SPLIT_WORD = input.split("");
    let tempArr = [];

    for(let i = 0; i < SPLIT_WORD.length; i++) {
        if(SPLIT_WORD[i].charCodeAt() < 90) {
            tempArr.push(SPLIT_WORD[i].toLowerCase());
        } else {
            tempArr.push(SPLIT_WORD[i].toUpperCase());
        }
    }

    console.log(tempArr.join(""));
}

upperLower(input);