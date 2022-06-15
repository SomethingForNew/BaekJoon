// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs").readFileSync("./testCase/testCase.txt").toString().trim().split("\n");

function matrixSum(input) {
    const [N, M] = input.shift().split(" ").map((element) => Number(element));
    let testCase1 = input.splice(0, N);
    let testCase2 = input.splice(0, M);
    let answerArr = [];

    for(let i = 0; i < testCase1.length; i++) {
        let tempArr = [];

        for(let j = 0; j < testCase2.length; j++) {
            tempArr.push(Number(testCase1[i].split(" ")[j]) + Number(testCase2[i].split(" ")[j]));
        }

        answerArr.push(tempArr);
    }

    console.log(answerArr.join("\n").replaceAll(",", " "));
}

matrixSum(input);