// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\r\n");

function groupWordsChecker(input) {
    console.log(input);

    input.shift();

    let temp   = [];
    let answer = [];

    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input[i].length; j++) {
            if(!temp.includes(input[i][j])) {
                temp.push(input[i][j]);

                if (temp[temp.length -1] !== input[i][j]) {
                    
                }
            }

        }
        
        temp = [];
    }
    
    console.log(temp);
    console.log(temp.length);
}

groupWordsChecker(input);