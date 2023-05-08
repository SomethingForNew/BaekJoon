// const input  = require("fs").readFileSync("/dev/stdin").toString().trim();
// const input = "18".toString().trim();
// const input = "4".toString().trim();
// const input = "6".toString().trim();
// const input = "9".toString().trim();
// const input = "11".toString().trim();

function sugerDelivery(input) {
    let kg = Number(input);
    let bongji = 0;

    while(true) {
        if(kg % 5 === 0) {
            bongji += (kg / 5);
            break;
        }

        if(kg <= 0) {
            bongji = -1;
            break;
        }

        kg = kg - 3;
        bongji++;
    }

    console.log(bongji);
}

sugerDelivery(input);