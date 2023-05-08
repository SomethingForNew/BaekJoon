// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "appa".toString().trim();

function hongJun(input) {
    let ANSWER_ARR = [];

    for(let i = 0; i < 3; i++) {
        if(i === 1) {
            ANSWER_ARR.push(`:fan::${input}::fan:`);
        } else {
            ANSWER_ARR.push(`:fan::fan::fan:`);
        }
    }

    return ANSWER_ARR.join("\n");
}

console.log(hongJun(input));