// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function luncay(input) {
    for(let i = 0; i <input.length - 1; i++) {
        console.log(`Objects weighing ${Number(input[i]).toFixed(2)} on Earth will weigh ${Number(input[i] * 0.167).toFixed(2)} on the moon.`);
    }
}

luncay(input);