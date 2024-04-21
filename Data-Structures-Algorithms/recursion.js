// Q. what is recursion?
// Ans. a process (a function in our case ) that calls itself

// Method 1
function countDown(num){
    if(num <= 0){
        console.log("All done");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(5)

// Method 2
// function countDown(num){
//     for(let i = num; i > 0; i-- ){
//         console.log(i)
//     }
//     console.log("All done")
// }
// countDown(5)