// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "1 1 1 1".toString().trim();
function siteScore(input) {
    const [UR, TR, UO, TO] = input.split(" ").map(v => Number(v));
    const answer = (56 * UR) + (24 * TR) + (14 * UO) + (6 * TO);

    return answer;
}

console.log(siteScore(input));