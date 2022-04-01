const input  = require("fs").readFileSync("/dev/stdin").toString().trim();

function calcPopularity(input) {
    console.log(Number(input) === 0 ? "YONSEI" : "Leading the Way to the Future");
}

calcPopularity(input);