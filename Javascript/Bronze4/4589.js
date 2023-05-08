// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function gnomeSequencing(input) {
    const [totalCnt, ...testCase] = input;
    let tempArr = ['Gnomes:'];

    for(let i = 0; i < testCase.length; i++) {
        const eachTestCase = testCase[i].toString().split(" ").map(Number);

        if(eachTestCase[0] < eachTestCase[1] && eachTestCase[1] < eachTestCase[2]) {
            tempArr.push("Ordered");
        } else if(eachTestCase[0] > eachTestCase[1] && eachTestCase[1] > eachTestCase[2]) {
            tempArr.push("Ordered");
        } else {
            tempArr.push("Unordered");
        }
    }

   return tempArr.join("\n");
}

console.log(gnomeSequencing(input));