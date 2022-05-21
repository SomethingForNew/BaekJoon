// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = "31 41 59".toString().trim().split(" ");

function pressureOnUniv(input) {
    const S = +input[0];
    const K  = +input[1];
    const H = +input[2];
    const sum = S + K + H;

    if(sum >= 100) {
        return "OK";
    }
    else {
        if(S < K && S < H){
            return "Soongsil";
        }

        if(K < S && K < H){
            return "Korea";
        }

        if(H < S && H < K){
            return "Hanyang";
        }
    }
}

console.log(pressureOnUniv(input));