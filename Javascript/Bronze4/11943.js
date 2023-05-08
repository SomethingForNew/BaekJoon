// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [FIRST_BASKET, SECOND_BASKET] = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function moveFile(FIRST_BASKET, SECOND_BASKET) {
    const [A, B] = FIRST_BASKET.split(" ").map(Number);
    const [C, D] = SECOND_BASKET.split(" ").map(Number);

    return A + D >= B + C ? B + C : A + D;
}

console.log(moveFile(FIRST_BASKET, SECOND_BASKET));