// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "aaah\naaaaah".toString().split("\n");
function ahh(input) {
    console.log(input);

    if(input[0].length >= input[1].length) {
        console.log("go");
    } else {
        console.log("no");
    }
}

ahh(input);