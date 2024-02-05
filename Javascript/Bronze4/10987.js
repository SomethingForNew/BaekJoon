// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = require("fs").readFileSync("./testCase.txt").toString().trim();
const vowelList = ["a", "e", "i", "o", "u"];
let cnt = 0;

input.split("").map((v) => {
  if (vowelList.includes(v)) {
    cnt++;
  }
});

console.log(cnt);
