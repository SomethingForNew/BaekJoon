// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input = "7 17 11 5".toString().trim().split(" ");

function barnSubscription(input) {
    const [N, W, H, L] = input.map(Number);

    return Math.min(Math.floor((W / L)) * Math.floor((H / L)), N);
}

console.log(barnSubscription(input));