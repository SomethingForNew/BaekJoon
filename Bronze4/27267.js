// const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
const input = "3 6 4 4".toString().split(" ").map(Number);

function Сравнениекомнат(input) {
    const M = input[0] * input[1];
    const P = input[2] * input[3];

    if(M > P) {
        return "M";
    } else if(M < P) {
        return "P"
    } else if(M === P) {
        return "E"
    }
}

console.log(Сравнениекомнат(input));