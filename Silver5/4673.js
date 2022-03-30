function selfNumber() {
    let tempArr = [];
    let answer  = [];

    for (let i = 1; i <= 10000; i++) {
        let strNum = String(i);
        let sumEachIndexOfNum = 0;

        for (let j = 0; j < strNum.length; j++) {
            sumEachIndexOfNum += Number(strNum[j]);
        }

        let constructor = i + sumEachIndexOfNum;
        tempArr.push(constructor);
    }

    for (let i = 1; i <= 10000; i++) {
        if (tempArr.indexOf(i) === -1) {
            answer += i + "\n";
        }
    }
    console.log(answer);
}

selfNumber();