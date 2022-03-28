// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "734 893".toString().trim().split(" ");

function getConst(input) {
    let input1 = input[0].split("").reverse().join("");
    let input2 = input[1].split("").reverse().join("");

    console.log(input1 > input2 ? input1 : input2);
}

getConst(input);