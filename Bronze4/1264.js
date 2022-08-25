// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function theNumberOfVowels(input) {
    const filter = 'aeiouAEIOU';
    let answerArr = [];

    for(let i = 0; i < input.length - 1; i++) {
        let cnt = 0;

        for(let j = 0; j < input[i].length; j++) {
            if(filter.includes(input[i][j])) {
                cnt++;
            }
        }
        
        answerArr.push(cnt);
        cnt = 0;
    }
    
    return answerArr.join('\n');
}

console.log(theNumberOfVowels(input));