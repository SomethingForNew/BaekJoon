// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "1 2 2".toString().trim();

function threeIntegers(input) {
    const testCaseArr = input.split(" ").map(Number);
    let one = 0;
    let two = 0;

    for(let i = 0; i < testCaseArr.length; i++) {
        testCaseArr[i] % 2 !== 0 ? one++ : two++;
    }

    console.log(one > two ? 1 : 2);
}

threeIntegers(input);