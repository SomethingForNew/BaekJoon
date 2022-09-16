// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim();

function selectSubject(input) {
    const [A, B, C, D, E, F] = input.split("\n").map(Number);
    const science = [A, B, C, D].sort((a, b) => b - a);
    const society = [E, F].sort((a, b) => b - a);

    science.pop();
    society.pop();

    const answer = science.reduce((acc, cur) => acc + cur) + society[0];

    return answer;
}

console.log(selectSubject(input));