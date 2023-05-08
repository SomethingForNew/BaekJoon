// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("");
const input = "WA".toString().trim().split("");
// const input = "UNUCIC".toString().trim().split("");

function dial(input) {
    let phoneDial = {
        2 : "ABC",
        3 : "DEF",
        4 : "GHI",
        5 : "JKL",
        6 : "MNO",
        7 : "PQRS",
        8 : "TUV",
        9 : "WXYZ",
    };
    let answer = 0;
    
    for(let i = 0; i < input.length; i++) {
        for(let j = 2; j <= 9; j++) {
            if(phoneDial[j].includes(input[i])){
                answer += j + 1;
            }
        }
    }

    console.log(answer);
}

dial(input);