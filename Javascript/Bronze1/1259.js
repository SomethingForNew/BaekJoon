// const testCase  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const testCase = "121\n1231\n12421\n0".toString().trim().split("\n");

function palindromeString(testCase) {
    let reverseTestCase = [];

    for(let i = 0; i<testCase.length - 1; i++) {
        reverseTestCase.push(testCase[i].split("").reverse().join(""));
        if(testCase[i] === reverseTestCase[i]) {
            console.log("yes");
        }else {
            console.log("no");
        }
    }
}

palindromeString(testCase);