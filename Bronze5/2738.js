// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = require("fs").readFileSync("./testCase/testCase.txt").toString().trim().split("\n");

function matrixSum(input) {
    let number = input
		.shift()
		.split(" ")
		.map((el) => Number(el));
	input = input.map((el) => el.split(" ").map((el) => Number(el)));
	let arr1 = input.splice(0, number[0]);
	let result = arr1.map((el1, idx1) =>
		el1.map((el2, idx2) => el2 + input[idx1][idx2])
	);
	let value = [];
	result.forEach((el) => {
		value.push(el.join(" "));
	});
	console.log(value.join("\n"));
}

matrixSum(input);