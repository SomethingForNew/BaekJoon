// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function iWillBeThePrsidentOfWomensSocieety(input) {
    const TESTCASE = input[0];

    for(let i = 0; i < TESTCASE; i++) {
        const k = Number(input[i*2 + 1]);
        const n = Number(input[i*2 + 2]);
        const apartment = Array(k + 1).fill().map(() => Array(n + 1).fill(0));

        for(let i = 0; i <= k; i++) {
            for(let j = 1; j <= n; j++) {
                if(i > 0 && j > 1) {
                    break;
                }

                apartment[i][j] = j;
            }
        }

        for(let i = 1; i <= k; i++) {
            for(let j = 1; j <= n; j++) {
                apartment[i][j] = apartment[i - 1][j] + apartment [i][j - 1];
            }
        }

        console.log(apartment[k][n]);
    }
}

iWillBeThePrsidentOfWomensSocieety(input);