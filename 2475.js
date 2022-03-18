// const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const input = "0 4 2 5 6".toString().split(" ");

function numberOfVerifications() {
    let inputMap = input.map(x => Number(x * x));
    let answer = 0;

    inputMap.forEach(function(element) {
        answer += Number(element);
    });

    console.log(answer % 10);
}

numberOfVerifications(input);