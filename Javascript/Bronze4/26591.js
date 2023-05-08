// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");

function triangleHeight(input) {
    const [N, ...ARR] = input;

    for(let i = 0; i < N; i++) {
        let area = parseFloat(ARR[i].split(" ")[0]);
        let base = parseFloat(ARR[i].split(" ")[1]);
        let height = (area * 2 / base).toFixed(2);

        console.log(`The height of the triangle is ${height} units`);
    }
}

triangleHeight(input);