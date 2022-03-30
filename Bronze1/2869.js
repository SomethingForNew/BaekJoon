// const testCase  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
// const testCase = "2 1 5".toString().trim().split(" ");
// const testCase = "5 1 6".toString().trim().split(" ");
const testCase = "100 99 1000000000".toString().trim().split(" ");

function snailWantsToClimb(testCase) {
    let dayTime   = testCase[0];
    let nightTime = testCase[1];
    let height    = testCase[2];
    let answer = Math.ceil((height - nightTime) / (dayTime - nightTime));

    console.log(answer);
}

snailWantsToClimb(testCase);