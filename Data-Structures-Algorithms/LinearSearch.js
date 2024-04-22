// Q. What is Liner Search.

/* Ans . A linear search or sequential search is a method for finding an element
 within a list. It sequentially checks each element of the list until a 
 match is found or the whole list has been searched. */


const givenArr = [10, 45, 69, 14, 89, 100, 23, 201];
function linerSearch(arr, findnum) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (findnum == arr[i]) return i;
    }
    return "not found"

}
console.log(linerSearch(givenArr, 14)); // 3