// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");

function dancingGomGom(input) {
    const [N, ...Arr] = input;
    let answer = [];

    for(let i = 0; i < N; i++) {
        if(Number(Arr[i].split("-")[1]) <= 90) {
            answer.push(Number(Arr[i].split("-")[1]));
        }
    }

    return answer.length;
}

console.log(dancingGomGom(input));