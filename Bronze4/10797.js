// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [day, nums] = require("fs").readFileSync("testCase/testCase.txt").toString().trim().split("\n");

function the10thDayNoDrivingSystem(day, nums) {
    console.log(nums.split(" ").filter(i => i === day).length);
}

the10thDayNoDrivingSystem(day, nums);