// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");

function wayOnAnErrand(input) {
    let totalSeconds = 0;

    input.forEach(element => {
        totalSeconds += Number(element);
    });

    console.log(parseInt(totalSeconds / 60));
    console.log(parseInt(totalSeconds % 60));
}

wayOnAnErrand(input);