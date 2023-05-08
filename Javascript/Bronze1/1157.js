// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().toLowerCase().split("");
const input1 = "Mississipi".toString().trim().toLowerCase().split(""); // ?
const input2 = "zZa".toString().trim().toLowerCase().split("");        // Z
const input3 = "z".toString().trim().toLowerCase().split("");          // Z
const input4 = "baaa".toString().trim().toLowerCase().split("");       // A

let answerObj = {};

function addFunction(input1) {
    input1.forEach(x => {
        answerObj[x] = answerObj[x] ? answerObj[x] + 1 : 1;
    });

    let maxInAnswerObj = Math.max(...Object.values(answerObj));
    let maxChar = "";

    for(let key in answerObj) {
        if(answerObj[key] === maxInAnswerObj) {
            maxChar += key;
        }

        if(maxChar.length >= 2) {
            console.log("?");
            return;
        }
    }

    console.log(maxChar.toUpperCase());
}

addFunction(input);