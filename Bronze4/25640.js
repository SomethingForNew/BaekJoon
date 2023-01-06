// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");

function mbti(input) {
    const [JINHO, N, ...Arr] = input;
    let answer = 0;

    for(let i = 0; i < N; i++) {
        if(Arr[i] === JINHO) {
            answer++;
        }
    }

    return answer;
}

console.log(mbti(input));