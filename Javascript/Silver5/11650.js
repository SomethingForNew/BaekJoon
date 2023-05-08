// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function sortXY(input) {
    let testCnt  = input.shift();
    let testCase = input;
    let coordinate = testCase.map(x => x.split(" ").map(x => Number(x)));

    let aoo = coordinate.sort((a, b) => {
        if(a[0] > b[0]) {
            return 1;
        } else if (a[0] < b[0]) {
            return -1;
        } else {
            return a[1] - b[1]
        }
    });

    console.log(aoo.map(x => x.join(" ")).join("\n"));
}

sortXY(input);