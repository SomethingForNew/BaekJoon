// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function groupWordsChecker(input) {
    let testCnt = input[0];
    let answer = 0;
    
    for(let i = 1; i <= testCnt; i++) {
        let tempArr = [];
        let chk = true;

        for(let j = 0; j < input[i].length; j++) {
            if(tempArr.indexOf(input[i][j]) === -1) {
                tempArr.push(input[i][j]);
            } else {
                if(tempArr.indexOf(input[i][j]) !== tempArr.length - 1) {
                    chk = false;
                    break;
                }
            }
        }

        if(chk) {
            answer += 1;
        }
    }

    console.log(answer);
}

groupWordsChecker(input);