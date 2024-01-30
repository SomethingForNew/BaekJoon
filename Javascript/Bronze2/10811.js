// const input  = require("fs").readFileSync("/dev/stdin").toString();
const input = require("fs").readFileSync("./testCase.txt").toString();

function switchBasket(input) {
  const [N, M] = input.split("\n")[0].split(" ");
  const basketArr = new Array(Number(N)).fill().map((v, i) => i + 1);

  for (let i = 1; i <= M; i++) {
    const [I, J] = input.split("\n")[i].split(" ");
    const tempArr = [];

    for (let j = I - 1; j < J; j++) {
      tempArr.push(basketArr[j]);
    }

    tempArr.reverse();
    basketArr.splice(I - 1, J - I + 1, ...tempArr);
  }

  return basketArr.join(" ");
}

console.log(switchBasket(input));
