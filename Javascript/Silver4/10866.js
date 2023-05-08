// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\r\n");

function deque(input) {
    let deque  = [];
    let answer = [];

    for(let i = 1; i <= input[0]; i ++) {
        switch(input[i].split(" ")[0]) {
            case "push_front":
                deque.unshift(input[i].split(" ")[1]);
                break;

            case "push_back":
                deque.push(input[i].split(" ")[1]);
                break;

            case "pop_front":
                answer.push(deque.shift() || -1);
                break;

            case "pop_back":
                answer.push(deque.pop() || -1);
                break;
          
            case "size":
                answer.push(deque.length);
                break;

            case "empty":
                answer.push(deque[deque.length -1] ? 0 : 1);
                break;

            case "front":
                answer.push(deque[0] || -1);
                break;

            case "back":
                answer.push(deque[deque.length -1] || -1);
                break;
          }
    }

    console.log(answer.join("\n"));
}

deque(input);