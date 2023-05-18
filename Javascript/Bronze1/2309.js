// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n").map(Number);
const Total = input.reduce((r, v)=>{return r + v},0);
let answer = '';

for(let i = 0; i < 9; i++){
  if(answer.length > 0) {
    break;
  }

  for(let j = i + 1; j < 9; j++){
    if(Total - input[i] - input[j] === 100){
      const truth = input.filter((_, k) => k !== i && k !== j).sort((a, b) => a - b);
      answer = truth.join('\n');
      console.log(answer);
      break;
    }
  }
}