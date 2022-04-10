function todaySeoul() {
    let answer = new Date().toISOString().split("T");

    console.log(answer[0]);

    // let year  = new Date().getFullYear();
    // let month = new Date().getMonth() + 1;
    // let date  = new Date().getDate();

    // console.log(`${year}-${month}-${date}`);
}

todaySeoul();