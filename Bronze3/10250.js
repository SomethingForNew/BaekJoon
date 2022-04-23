// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function findOutRoomNumber(input) {
    let T = input.shift();
    let finalAnswer = "";
    
    for(let i = 0; i < T; i++) {
        let testCase = input[i].split(" ").map(element => parseInt(element));
        let H = testCase[0];
        let W = testCase[1];
        let N = testCase[2];
        let answerFloor =  N % H;;
        let answerRoomNum = Math.ceil(N / H) < 10 ? "0" + Math.ceil(N / H) : Math.ceil(N / H);
        
        if(N % H === 0) {
            answerFloor = H;
        }
        
        finalAnswer += `${answerFloor}${answerRoomNum}` + "\n";
    }

    console.log(finalAnswer);
}

findOutRoomNumber(input);