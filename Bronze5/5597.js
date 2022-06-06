// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function assignment(input) {
    const arr = input.map(v => parseInt(v)).sort((a, b) => {return a - b});
    let tfArr = [];
    let tempArr = [];

    for(let i = 0; i < 30; i++) {
        tfArr.push(false);
    }

    for(let j = 0; j < arr.length; j++) {
        tfArr[arr[j] - 1] = true; 
    }

    for(let k = 0; k < tfArr.length; k++) {
        if(tfArr[k] === false) {
            tempArr.push(k + 1);
        }
    }

    console.log(tempArr.join("\n"));
}

assignment(input);