// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "C0".toString().trim();

function grade(input) {
    if(input === "A+")
        return "4.3";
        
    if(input === "A0")
        return "4.0";
        
    if(input === "A-")
        return "3.7";

    if(input === "B+")
        return "3.3";
        
    if(input === "B0")
        return "3.0";
        
    if(input === "B-")
        return "2.7";

    if(input === "C+")
        return "2.3";
        
    if(input === "C0")
        return "2.0";
        
    if(input === "C-")
        return "1.7";

    if(input === "D+")
        return "1.3";
        
    if(input === "D0")
        return "1.0";
        
    if(input === "D-")
        return "0.7";

    if(input === "F")
        return "0.0";
}

console.log(grade(input));