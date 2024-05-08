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