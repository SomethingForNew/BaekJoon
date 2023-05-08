// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
const input  = "13".toString().trim();

function honeycomb(input) {
    let i = 1;
    let j = 1;

    while(i < input) {
        // i = i + j * 6;
        // j++
        i += j++ * 6;
    }

    console.log(j);

    //-------------------------------------------//
    // let count = 0;

    // while(input > 1)  {
    //     count++;
    //     input -= 6 * count;
    // }

    // console.log(count + 1);
}

honeycomb(Number(input));