// Q.Develop a program to find out given number is a prime or not?
function isPrime(num) {
    if (num == 1) {
        return false;
    } 
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
let primNumber = 17;
let nonPrimeNumber = 15;
let result = isPrime(primNumber);
let nonPrimeResult = isPrime(nonPrimeNumber);
console.log("is prime:",result) // true
console.log("non Prime", nonPrimeResult) // false
