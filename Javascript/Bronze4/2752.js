// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input  = "3 1 2".toString().trim().split(" ");

function sort3Numbers(input) {
    let numsArr = input.map(v => Number(v));
    let sortNumsArr = numsArr.sort((a, b) => {return a - b});

    console.log(sortNumsArr.join(" "));
}

sort3Numbers(input);