// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "baekjoon".toString().trim();

function countAlphabet(input) {
    // const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const answerArr = new Array(26).fill(0);

    for(let i = 0; i <input.length; i++) {
        const alphabet = input.charCodeAt(i) - 97;
        
        answerArr[alphabet]++;
        // answerArr[alphabet.indexOf(input[i])]++;
    }

    return answerArr.join(" ");
}

console.log(countAlphabet(input));