const newDate = new Date().toLocaleDateString().split("/");
const year  = newDate[2];
const month = newDate[1];
const date  = newDate[0];

console.log(`${year}\n${month}\n${date}`);