// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function aiTimer(input) {
    let hour = parseInt(input[0].split(" ")[0]);
    let min  = parseInt(input[0].split(" ")[1]);
    let sec  = parseInt(input[0].split(" ")[2]);
    let cookingTime = parseInt(input[1]);
    let totalSec = hour * 3600 + min * 60 + sec + cookingTime;

    secToTime(totalSec);
}

function secToTime(totalSec) {
    let hour = parseInt(totalSec / 3600);
    let min  = parseInt((totalSec % 3600) / 60);
    let seconds = totalSec % 60;

    if(hour === 24) {
        hour = 0; 
    } else if(hour > 24) {
        hour = hour % 24;
    }

    return console.log(hour + " " + min + " " + seconds);
}

aiTimer(input);