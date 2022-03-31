// const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\r\n");

function stack(input) {
    let stack  = [];
    let answer = [];

    for(let i = 1; i <= input[0]; i ++) {
        switch(input[i]) {
            case "pop":
                answer.push(stack.pop() || -1);
                break;
          
            case "size":
                answer.push(stack.length);
                break;

            case "empty":
                answer.push(stack[stack.length -1] ? 0 : 1);
                break;

            case "top":
                answer.push(stack[stack.length -1] || -1);
                break;

            default:
                stack.push(input[i].split(" ")[1]);
                break;
          }
    }

    console.log(answer.join("\n"));
}

stack(input);