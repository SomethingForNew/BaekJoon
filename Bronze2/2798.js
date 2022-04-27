// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function blackjack(input) {
    const N = Number(input[0].split(" ")[0]);
    const M = Number(input[0].split(" ")[1]);
    const CARDS = input[1].split(" ").map(value => Number(value));
    let answer = 0;

    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            for (let k = j + 1; k < N; k++) {
                let temp = CARDS[i] + CARDS[j] + CARDS[k];

                if (temp <= M && temp > answer) {
                    answer = temp;
                }
            }
        }
    }

    console.log(answer);
}

blackjack(input);