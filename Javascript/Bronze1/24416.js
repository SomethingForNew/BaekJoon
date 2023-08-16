// const testCase  = require("fs").readFileSync("/dev/stdin").toString().trim();
const testCase = "30".toString().trim();

const fibonacciRecursive = (n) => {
	let cnt = 0;

	const fib = (_n) => {
		if (_n <= 2) {
			cnt++;
			return 1;
		}

		return fib(_n - 1) + fib(_n - 2);
	};

	fib(n);

	return cnt;
};

const fibonacciDp = (n) => {
	const memo = [0, 1, 1];
	let cnt = 0;

	for (let i = 3; i <= n; i++) {
		cnt++;
		memo[i] = memo[i - 1] + memo[i - 2];
	}

	return cnt;
};

function fibonacci1(testCase) {
    const recursiveCnt = fibonacciRecursive(testCase);
	const dpCnt = fibonacciDp(testCase);
	console.log(`${recursiveCnt} ${dpCnt}`);
}

fibonacci1(testCase);