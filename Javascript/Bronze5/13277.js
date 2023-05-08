// const input  = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const input = "893724358493284 238947328947329".toString().split(" ");

function rats(input) {
    let a = BigInt(input[0]);
    let b = BigInt(input[1]);

    console.log( (a * b).toString() );
}

rats(input);