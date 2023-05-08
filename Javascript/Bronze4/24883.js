// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = "N".toString().trim();

function automatinCompletion(input) {
    if(input === 'N' || input === 'n') {
        return 'Naver D2';
    } else {
        return 'Naver Whale';
    }
}

console.log(automatinCompletion(input));