// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "10000000".toString().trim();

function tax(input) {
    const TYPE_A = Number(input) * 0.78;
    const TYPE_B = (Number(input) * 0.8) + ((Number(input) * 0.2) * 0.78);

    console.log(TYPE_A, TYPE_B);
}

tax(input);