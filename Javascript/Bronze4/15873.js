// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input  = "109".toString().trim();

function aPluesB(input) {
    let a = 0;
    let b = 0;

    if (input.length === 4){
        console.log(20);
    }
    else if (input.length === 3){
        if(input.split("")[1] === "0") {
            a += Number(input.split("")[0] + input.split("")[1]);
            b += Number(input.split("")[2]);

            console.log(a + b);
        } else {
            a += Number(input.split("")[0]);
            b += Number(input.split("")[1] + input.split("")[2]);
            console.log(a + b);
        }
    }
    else {
        console.log(Number(input.split("")[0]) + Number(input.split("")[1]));
    }
}

aPluesB(input);