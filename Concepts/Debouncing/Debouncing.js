// Q. what is debouncing
/* Ans. Debouncing in JavaScript is a technique used to optimize performance by delaying the execution
 of a function until after a certain period of inactivity. It's commonly used in scenarios
 where frequent rapid calls to a function need to be controlled to prevent performance issues,
 example : like in the search box using debouncing prevent api call on every single word user typed in input.
 Video URL : https://www.youtube.com/watch?v=MK8VSKzspCE&t=420s
 */

let counter = 0;
function getData() {
    console.log('fetching Data', counter ++ )
}

function myDebounce(call, delay){
    let timer;
    return function(...arg){
        if(timer) clearTimeout(timer);
        setTimeout(()=> {
            call()
        },delay)
    }
}

const BetterFunction = myDebounce(getData, 1000);