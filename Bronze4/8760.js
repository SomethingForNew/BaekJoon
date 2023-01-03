// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function Schronisko(input) {
    const [cnt, ...testCase] = input;
    const ANSWERARR = [];

    testCase.forEach(element => {
        const W = element.split(" ")[0];
        const K = element.split(" ")[1];
        const ITEM = Math.floor((W * K) / 2);

        ANSWERARR.push(ITEM);
    });

    return ANSWERARR.join("\n");
}

console.log(Schronisko(input));