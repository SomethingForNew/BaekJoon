// // const input  = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(num => Number(num));
// // const input  = "3 16".toString().trim().split(" ");

// // function isPrimeNum(testCase) {
// //     for(let i = 2; testCase > i; i++) {
// //         if(testCase % i === 0) {
// //             return false;
// //         }

// //     }

// //     return testCase > 1;
// // }

// // function findDecimal(input) {
// //     let minNum    = Number(input[0]);
// //     let maxNum    = Number(input[1]);
// //     let numArr    = [];
// //     let answerArr = [];

// //     for(let i = minNum; i <= maxNum; i++) {
// //         numArr.push(i);
// //     }

// //     for(let j = 0; j < numArr.length; j++) {
// //         if(isPrimeNum(numArr[j])) {
// //             answerArr.push(numArr[j]);
// //         }
// //     }

// //     console.log(answerArr.join("\n"));
// // }

// // findDecimal(input);


// let input = [3, 16];
// let max = 1000000;
// let m = input.shift();
// let n = input.shift();
// let isPrimeArr = new Array(n + 1);
// let square = 0;

// isPrimeArr.fill(true);
// isPrimeArr[0] = isPrimeArr[1] = false;

// for(let i = 2; i < n + 1; i++) {
//     if(isPrimeArr[i]) {
//         if(Number(Math.pow(i, 2)) > max) {
//             break;
//         } else {
//             for(square = Number(Math.pow(i, 2)); square < n + 1;) {
//                 isPrimeArr[square] = false;
//                 square += i;
//             }
//         } 
//     }
// }

// for(let j = m; j < n; j++) {
//     if(isPrimeArr[j]) {
//         console.log(j);
//     }
// }