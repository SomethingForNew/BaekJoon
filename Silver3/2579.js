// const [n, ...arr]  = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, ...arr] = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n").map(v => Number(v));

function climbStair(n, arr) {
    const dp = new Array(n).fill(0);

    dp[0] = arr[0];
    dp[1] = arr[0] + arr[1];
    dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

    for (let i = 3; i < n; i++) {
    dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
    }

    console.log(dp[n - 1]);
}

climbStair(n, arr);