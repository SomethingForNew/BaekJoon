// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");
const sangM = input[0]; // 상민이가 가지고 있는 카드의 개수
const sCards = input[1].split(" ").map(Number); // 상민이가 가지고 있는 정수
const M = input[2]; // M
const mCards = input[3].split(" ").map(Number); // M개의 정수
const aooMap = new Map();
const answerArr = [];

// M개의 정수에 대해서, 각 정수가 적힌 카드를 상근이가 몇개 가지고 있는가
sCards.forEach(value => {
    if(aooMap.has(value)) {
        aooMap.set(value, aooMap.get(value) + 1);
    } else {
        aooMap.set(value, 1);
    }
});

mCards.forEach(value => {
    answerArr.push(aooMap.get(value) || 0
)});

console.log(answerArr.join(" "));