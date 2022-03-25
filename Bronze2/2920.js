// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const input = "1 2 3 4 5 6 7 8".toString().split(" ");
// const input = "8 7 6 5 4 3 2 1".toString().split(" ");
const input = "8 1 7 2 6 3 5 4".toString().split(" ");

function checkTheScale(input) {
    let scale      = Number(input.join(""));
    let ascending  = 12345678;
    let descending = 87654321;

    if(scale === ascending ) {
        console.log("ascending");
    } else if (scale === descending) {
        console.log("descending");
    } else {
        console.log("mixed");
    }
}

checkTheScale(input);