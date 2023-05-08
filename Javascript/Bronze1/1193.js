// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input  = "11".toString().trim();

function findFraction(input) {
    let X = input;
    let diagonal = 0;

    while(X > 0) {
        diagonal++;
        X -= diagonal;
    }

    if(diagonal % 2 === 0) {
        console.log(`${diagonal + X}/${1 +(-X)}`);
    } else {
        console.log(`${1 +(-X)}/${diagonal + X}`);
    }
}


findFraction(input);