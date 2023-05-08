const { arrayBuffer } = require("stream/consumers");

const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const input  = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\r\n");

function findNumber(input) {
    const [N, A, M, B] = input.map(x => x.split(" "));
    const aoo = new Set(A);
    const boo = B.map(x => aoo.has(x) ? 1 : 0);

    console.log(boo.join("\n"));
}

findNumber(input);