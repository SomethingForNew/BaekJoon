// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = "shiftpsh\n6".toString().trim().split("\n");
function StringAndString(input) {
  const [WORD, I] = input;

  for (let i = 0; i < WORD.length; i++) {
    if (i + 1 === Number(I)) {
      return WORD[i];
    }
  }
}

console.log(StringAndString(input));
