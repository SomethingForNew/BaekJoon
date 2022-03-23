// const input  = require("fs").readFileSync("/dev/stdin").toString();
const input = "2018".toString();

function getOpenSchoolYear(input) {
    let hongikYear    = 1946;
    let inputYear = Number(input);
    
    console.log(inputYear - hongikYear);
}

getOpenSchoolYear(input);