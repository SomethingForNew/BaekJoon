const { off } = require("process");

// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function examScore(input) {
    const MINGUK_SCORE = input[0].toString().split(" ").map(v => +v).reduce((a, b) => {return a + b}, 0);
    const MANSAE_SCORE = input[1].toString().split(" ").map(v => +v).reduce((a, b) => {return a + b}, 0);;

    if(MINGUK_SCORE > MANSAE_SCORE){
        console.log(MINGUK_SCORE);
    }
    else if(MINGUK_SCORE < MANSAE_SCORE){
        console.log(MANSAE_SCORE);
    }
    else{
        console.log(MINGUK_SCORE);
    }
}

examScore(input);