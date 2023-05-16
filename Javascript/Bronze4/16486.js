// const input  = require("fs").readFileSync("/dev/stdin").toString().split('\n').map(Number);
const input = "13\n8".toString().trim().split('\n').map(Number);

function 운동장한바퀴(input) {
    return input[0] * 2 + input[1] * 2 * 3.141592;
}

console.log(운동장한바퀴(input));