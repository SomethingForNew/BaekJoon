// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "200".toString().trim();

function Q1789(input) {
    let sum = 0;
    let cnt = 0;

    while(sum < input) {
        cnt++;
        sum += cnt;
    }

    if(sum > input) {
        cnt--;
    }

    console.log(cnt);
}

Q1789(input);