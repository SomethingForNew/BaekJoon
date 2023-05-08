// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
const input = "7\n3\n0\n6\n4\n1".toString().split("\n").map(Number);

function winningScore(input) {
    let applesTotalScroe = 0; 
    let bananasTotalScroe = 0; 

    applesTotalScroe += input[0] * 3;
    applesTotalScroe += input[1] * 2;
    applesTotalScroe += input[2] * 1;
    bananasTotalScroe += input[3] *3;
    bananasTotalScroe += input[4] *2;
    bananasTotalScroe += input[5] *1;

    if(applesTotalScroe > bananasTotalScroe) {
        return "A";
    } else if(bananasTotalScroe > applesTotalScroe) {
        return "B";
    } else {
        return "T";
    }

}

console.log(winningScore(input));