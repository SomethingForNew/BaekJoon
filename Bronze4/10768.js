const fs = require('fs');
const [month, day] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
const answer = (month, day) => {
    if(month > 2)
        return "After";
    if(month < 2)
        return "Before";
    if(month === 2) { if(day > 18)
        return "After";
    if(day < 18)
        return "Before";
    if(day === 18)
        return "Special"
    }
}
console.log(answer(month, day));
