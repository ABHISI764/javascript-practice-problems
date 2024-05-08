// Q. what is Throttling
/* Ans. Throttling in JavaScript is a technique used to limit the rate at which a function 
can be executed. It ensures that the function is not called more frequently than a specified 
time interval,even if the function is triggered multiple times within that interval.
Example: like button disable for 5 seconds to prevent multiple click */

const myThrottle = (fn, delay) => {
    return function () {
        document.getElementById("myId").disabled = true;
        setTimeout(() => {
            fn();
        }, delay)
    }
}

const newFun = myThrottle(() => {
    document.getElementById("myId").disabled = false;
    console.log("user clicked!")

}, 5000)