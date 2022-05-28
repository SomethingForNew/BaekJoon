// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");
let a = input[0];
const o = input[1];
let b = input[2];

if (a.length === b.length) {
    if (o === "*") {
        console.log("1" + "0".repeat(a.length - 1) + "0".repeat(b.length - 1));
    } else {
        console.log("2" + "0".repeat(a.length - 1));
    }
} else {
    if (o === "*") {
        console.log("1" + "0".repeat(a.length - 1) + "0".repeat(b.length - 1));
    } else {
        if (a.length < b.length) {
            b = b.split('');
            b[b.length - a.length] = '1';
            console.log(b.join(''));
        } else {
            a = a.split('');
            a[a.length - b.length] = '1';
            console.log(a.join(''));
        }
    }
}