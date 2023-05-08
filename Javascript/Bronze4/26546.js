// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function reverse(input) {
    const [n, ...testCaseArr] = input;

    // 함수형 프로그래밍
    // return testCaseArr.map(testCase => testCase.split(" "))
    // .map(([originalText, startIdx, endIdx]) => [originalText.substring(0, startIdx), originalText.substring(endIdx)])
    // .map(arr => arr.join(''))
    // .join('\n');

    // 절차지향 프로그래밍
    let tempArr = [];
    for(let i = 0; i < n; i++) {
        const a = testCaseArr[i].split(" ")[0].substring(0, testCaseArr[i].split(" ")[1]);
        const b = testCaseArr[i].split(" ")[0].substring(testCaseArr[i].split(" ")[2], testCaseArr[i].split(" ")[0].length);
        tempArr.push(a + b);
    }
    
    return tempArr.join("\n");
}

console.log(reverse(input));