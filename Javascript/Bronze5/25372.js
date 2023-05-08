// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = require("fs").readFileSync("./testCase/testCase.txt").toString();

function password(input) {
    const [N, ...testCase] = input.split("\n");

    for(let i = 0; i < N; i++) {
        if(testCase[i].length >= 6 && testCase[i].length <= 9) {
            console.log("yes");
        } else {
            console.log("no");
        }
    }
}

password(input);