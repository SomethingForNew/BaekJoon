// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = "20".toString();

function codingIsPe(input) {
    const N = Number(input);
    let answer = "";

    for(let i = 1; i <= N / 4; i++) {
        answer += "long ";
    }

    return `${answer}int`;
}

console.log(codingIsPe(input));