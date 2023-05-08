// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\r\n");

function queue(input) {
    let queue  = [];
    let answer = [];

    for(let i = 1; i <= input[0]; i++) {
        switch(input[i]) {
            case "pop":
                answer.push(queue.shift() || -1);
                break;

            case "size":
                answer.push(queue.length);
                break;
            
            case "empty":
                answer.push(queue[queue.length - 1] ? 0 : 1);
                break;

            case "front":
                answer.push(queue[0] || -1);
                break;

            case "back":
                answer.push(queue[queue.length -1] || -1);
                break;

            default:
                queue.push(input[i].split(" ")[1]);
                break;
        }
    }

    console.log(answer.join("\n"));
}

queue(input);