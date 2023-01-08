// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim();

function wynikMeczu(input) {
    let A = 0;
    let B = 0;

    for(let i = 0; i < input.length; i++) {
        if(input[i] === "A") {
            A++;
        } else {
            B++;
        }
    }

    return `${A} : ${B}`;
}

console.log(wynikMeczu(input));