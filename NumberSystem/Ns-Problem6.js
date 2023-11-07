// Q. Print all odd numbers between two given numbers? 
function alloddNumber(start, end) {
    for (let i = start; i < end; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}
const start = 1;
const end = 10;
alloddNumber(start, end)