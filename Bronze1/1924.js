// const input = require("fs").readFileSync("/dev/stdin").toString().split(' ').map(Number);
const input = "3 14".toString().split(" ").map(Number);

// Date 객체 사용한 방법
function years2007(input) {
  const result = new Date(`2017-${input[0]}-${input[1]}`);
  result.setDate(result.getDate() + 1);

  return result.toString().split(" ")[0].toUpperCase();
}

// Date 객체를 사용하지 않은 방법
// function years2007(input) {
//   const dateList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   let [MONTH, DATE] = input;

//   if (MONTH === 1) {
//   } else if (MONTH === 2) {
//     DATE = DATE + 31;
//   } else if (MONTH <= 7) {
//     DATE = DATE + (MONTH - 1) * 30 + Math.ceil((month - 1) / 2) - 2;
//   } else {
//     DATE = DATE + (MONTH - 1) * 30 + Math.ceil(MONTH / 2) - 2;
//   }

//   return dateList[DATE % 7];
// }

console.log(years2007(input));
