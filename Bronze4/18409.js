// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "6\nbitaro".toString().split("\n");

function countuingVowels(input) {
    const [N, S] = input;
    const aiueo = ['a', 'i', 'u', 'e', 'o'];
    let cnt = 0;

    for(let i = 0; i < N; i ++)  {
        if(aiueo.includes(S[i])) {
            cnt++;
        }
    }

    return cnt;
}

console.log(countuingVowels(input));