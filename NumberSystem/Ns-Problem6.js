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

// same result using while 

// function oddNumbers(start, end){
//     let i = start;
//     while(i <= end){
//         if(i % 2 !== 0 ){
//             console.log(i)
//         }
//         i++
//     }
// }
// const start = 1;
// const end = 10;
// oddNumbers(start, end) // 1 3 5 7 9