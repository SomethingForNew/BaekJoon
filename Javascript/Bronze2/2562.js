const input  = require("fs").readFileSync("/dev/stdin").toString().split("\n");

function findBiggestNumber(input) {
    let numberArr  = input.map(x => Number(x));
    let biggestNum = Math.max(...numberArr);

    console.log(biggestNum);
    console.log(numberArr.indexOf(biggestNum) +1 );
}

findBiggestNumber(input);