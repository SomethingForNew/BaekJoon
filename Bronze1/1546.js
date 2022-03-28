// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input1 = "3\n40 80 60".toString().trim().split("\n"); // 75.0
const input2 = "3\n10 20 30".toString().trim().split("\n"); // 66.666667
const input3 = "4\n1 100 100 100".toString().trim().split("\n"); // 75.25 
const input4 = "5\n1 2 4 8 16".toString().trim().split("\n"); // 38.75
const input5 = "2\n3 10".toString().trim().split("\n"); // 65.0
const input6 = "4\n10 20 0 100".toString().trim().split("\n"); // 32.5
const input7 = "1\n50".toString().trim().split("\n"); // 100.0
const input8 = "9\n10 20 30 40 50 60 70 80 90".toString().trim().split("\n"); // 55.55555555555556

function getAvgScore(input) {
    let count       = Number(input[0]);
    let scoreArr    = input[1].split(" ").map(x => Number(x));
    let highScore   = Math.max(...scoreArr);
    let sumNewScore = 0;

    for(let i = 0; i < count; i++) {
        sumNewScore += (scoreArr[i] / highScore) * 100;
    }

    console.log(sumNewScore / count);
}

getAvgScore(input);