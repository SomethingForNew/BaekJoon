// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "1 3 0 0 1\n3 1 1 1 1".toString().split("\n");

function footballScoring(input) {
    const multi = [6,3,2,1,2];
    const [V, H] = input.toString().split(",");
    const V_SUM = V.split(" ").reduce((acc, item, idx) => acc + item * multi[idx], 0);
    const H_SUM = H.split(" ").reduce((acc, item, idx) => acc + item * multi[idx], 0);
    
    return `${V_SUM} ${H_SUM}`;
}

console.log(footballScoring(input));