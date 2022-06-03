const input  = require("fs").readFileSync("/dev/stdin").toString().trim();

function korean(input) {
    console.log(String.fromCharCode(Number(input) + 44031));
}

korean(input);