// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input  = "13".toString().trim();

function honeycomb(input) {
    let i = 1;
    let j = 1;

    while(i < input) {
        // i = i + j * 6;
        // j++
        i += j++ * 6;
    }

    console.log(j);
}

honeycomb(Number(input));