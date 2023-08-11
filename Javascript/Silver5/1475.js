// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "888888".toString().trim();

function roomNumber(input) {
    const cards = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let cnt = 0;

    for(i of input) {
        if(i === '6' || i === '9') {
            cnt++;

            if(cnt % 2 !== 0) {
                cards[6] += 1;
            }
        } else {
            cards[i] += 1;
        }
    }

    console.log(Math.max.apply(null, cards));
}

roomNumber(input);