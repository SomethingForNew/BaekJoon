// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "40 5\n41 6\n50 30 6".toString().split("\n");

function countingAntibodies(input) {
    const [Vk, Jk] = input[0].split(" ").map(v => Number(v));
    const [Vl, Jl] = input[1].split(" ").map(v => Number(v));
    const [Vh, Dh, Jh] = input[2].split(" ").map(v => Number(v));

    const heavyChain = Vh * Dh * Jh;
    const lightChainK = Vk * Jk;
    const lightChainL = Vl * Jl;
    const totalVariant = heavyChain * (lightChainK + lightChainL);

    return totalVariant;
}

console.log(countingAntibodies(input));