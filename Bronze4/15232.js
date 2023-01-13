// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n").map(Number);

function rectangles(input) {
    const [R, C] = input;
    let temp = "";

    for(let i = 0; i < R; i++) {
        for(let j = 0; j < C; j++) {
            temp += "*";
        }
        temp += "\n";
    }

    return temp;
}

console.log(rectangles(input));