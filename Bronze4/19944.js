// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "3 1".toString().trim().split(" ");
// const input = "3 5".toString().trim().split(" ");
// const input = "3 3".toString().trim().split(" ");

function newbie(input) {
    const N = Number(input[0]);
    const M = Number(input[1]);
    
    if(M === 1 || M ===2) {
        console.log("NEWBIE!");
    } else if(M <= N && M > 2) {
        console.log("OLDBIE!");
    } else {
        console.log("TLE!");
    }
}

newbie(input);