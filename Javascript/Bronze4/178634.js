// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "5519876".toString().trim();

function fyi(input) {
   return input.slice(0, 3) === "555" ? "YES" : "NO";
}

console.log(fyi(input));