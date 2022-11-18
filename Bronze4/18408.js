// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "1 2 2".toString().trim();

function threeIntegers(input) {
    const testCaseArr = input.split(" ").map(Number);
    
    const arr = [0, 0, 0];
    testCaseArr.forEach(testCase => ++arr[testCase]);

    console.log(arr[1] > arr[2] ? 1 : 2);
}

threeIntegers(input);