// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
const input = "6 4 14".toString().trim().split(' ').map(Number);

function hanhwa(input) {
    console.log(parseInt(input[2] / input[1]), parseInt(input[2]%input[1]));
}

hanhwa(input);