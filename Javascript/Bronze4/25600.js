// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().split("\n");

function triathlon(input) {
    const [N, ...Arr] = input;
    let tempArr = [];
    
    for(let i = 0; i < N; i++) {
        let a = Number(Arr[i].split(" ")[0]);
        let d = Number(Arr[i].split(" ")[1]);
        let g = Number(Arr[i].split(" ")[2]);

        if( a === d + g) {
            tempArr.push((a * ( d + g)) * 2);
        } else {
            tempArr.push(a * (d + g));
        }
    }
    
    return Math.max.apply(null, tempArr);
}

console.log(triathlon(input));