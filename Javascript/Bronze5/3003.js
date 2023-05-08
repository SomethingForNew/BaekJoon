// const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const input = "2 1 2 1 2 1".toString().split(" ");

function afterPartyBishopKnightPawn(input) {
    const FULL_PIECE = [1, 1, 2, 2, 2, 8];
    const TEST_CASE = input.map(v => Number(v));
    const ANSWER_ARR = [];

    for (let i = 0; i < FULL_PIECE.length; i++) {
        if(FULL_PIECE[i] === TEST_CASE[i]) {
            ANSWER_ARR.push(0);
        } else {
            ANSWER_ARR.push(FULL_PIECE[i] - TEST_CASE[i]);
        }
    }

    console.log(ANSWER_ARR.join(" "));
}

afterPartyBishopKnightPawn(input);