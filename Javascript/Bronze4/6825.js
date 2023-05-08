// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n").map(Number);

function bodyMassIndex(input) {
    const [WEIGHT, HEIGHT] = input;
    
    if( WEIGHT / (HEIGHT * HEIGHT) > 25) {
        return "Overweight";
    } else if(18.5 <= WEIGHT / (HEIGHT * HEIGHT) && WEIGHT / (HEIGHT * HEIGHT)  <= 25) {
        return "Normal weight";
    } else if(WEIGHT / (HEIGHT * HEIGHT) < 18.5) {
        return "Underweight";
    }
}

console.log(bodyMassIndex(input));