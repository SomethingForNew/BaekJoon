// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "10110111".toString().trim();

function seventeenTimes(input) {
    const bin = "0b" + input;
    const answer = (BigInt(bin) * 17n).toString(2);
    
    return answer;
}

console.log(seventeenTimes(input));