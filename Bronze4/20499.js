// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("/");
// const input  = "0/5/3".toString().trim().split("/");
// const input  = "12/4/5".toString().trim().split("/");
const input  = "0/0/1".toString().trim().split("/");

function kda(input) {
    console.log(input);

    let k = Number(input[0]);
    let d = Number(input[1]);
    let a = Number(input[2]);

    if( (k + a) < d || d === 0 ) {
        console.log("hasu");
    } else {
        console.log("gosu");
    }
}

kda(input);