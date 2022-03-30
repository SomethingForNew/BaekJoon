// const input  = require("fs").readFileSync("/dev/stdin").toString();
const input = "500".toString();

function arithmeticSequence(input) {
    let testCase = Number(input);
    let answer   = 0;

    for(let i = 1; i <= testCase; i++) {
        let strTestCase = i.toString();

        if(strTestCase < 100) {
            answer++;
            continue;
        } else {
            if( (strTestCase[0] - strTestCase[1]) === (strTestCase[1] - strTestCase[2]) ) {
                answer++;
                continue;
            }
        }
    }
    console.log(answer);
}

arithmeticSequence(input);