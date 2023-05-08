// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "23".toString().trim();

function run(input) {
    console.log(Math.ceil(Number(input) / 5));
}

run(input);