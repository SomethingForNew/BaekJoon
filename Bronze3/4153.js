// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\r\n");

function pitagoras(input) {
    for(let i  = 0; i < Number(input.length - 1); i++) {
        let sortNumArr = input[i].toString().split(" ").sort((a, b) => a - b);
        let ausar = Number(sortNumArr[0]);
        let auset = Number(sortNumArr[1]);
        let heru  = Number(sortNumArr[2]);

        console.log(Math.pow(ausar, 2) + Math.pow(auset, 2) === Math.pow(heru, 2) ? "right" : "wrong");
    }

    // for(let idx of input) {
    //     let sortNumArr = idx.split(" ").sort((a, b) => a - b)
    //     let ausar = Number(sortNumArr[0]);
    //     let auset = Number(sortNumArr[1]);
    //     let heru  = Number(sortNumArr[2]);

    //     console.log(Math.pow(ausar, 2) + Math.pow(auset, 2) === Math.pow(heru, 2) ? "right" : "wrong");
    // }

}

pitagoras(input);