// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const input  = "7 3".toString().trim().split(" ");

function josephus(input) {
    let N = Number(input[0]); // N개의 정수
    let K = Number(input[1]); // K번째
    let temp   = []; // N개의 정수를 담을 Array
    let answer = [];

    for(let i = 1; i <= N; i++) {
        temp.push(i); // 1 부터 N 까지의 정수를 temp Array에 담음
    }

    for(let i = 0; i < N; i++) { // N개 만큼 반복문
        for(let j = 1; j <= K; j++) {
            if(j === K) { 
                answer.push(temp.shift()); // j가 K와 같은 경우 전의 경우 현재 temp 0번쨰 값을 빼서 answer Array에 넣는다.
            } else {
                temp.push(temp.shift());  // j가 K와 같기 전까지는 temp의 0번쨰 값을 빼서 temp 제일 뒤로 도로 넣는다.
            }
        }
    }

    console.log(`<${answer.join(", ")}>`);
}

josephus(input);