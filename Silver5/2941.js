// const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().toString();
const input = "ljes=njak".trim().toString();
// const input = "ddz=z=".trim().toString();
// const input = "nljj".trim().toString();
// const input = "c=c=".trim().toString();
// const input = "dz=ak".trim().toString();

function croatiaLanguage(input) {
    // ▽문자열을 이용▽
    let RegExp = /c=|c-|dz=|d-|lj|nj|s=|z=/g;
    let answer = input.replace(RegExp, " ");
    
    console.log(answer.length);

    // ▽반복문을 이용▽
    // 반복문을 이용한 코드는 구글에서 찾음
    // let wordsArr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
    // let answer   = 0;

    // for(let i = 0; i < wordsArr.length; i++) {
    //     while(input !== input.replace(wordsArr[i], "")) {
    //         answer ++;
    //         input = input.replace(wordsArr[i], " ");
    //     }
    // }
    // console.log( answer + input.split(" ").join("").length );
}

croatiaLanguage(input);