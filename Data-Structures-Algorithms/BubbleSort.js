
// Q. Bubble sort
/* Ans. Bubble sort is a simple sorting algorithm that repeatedly steps through the list of elements to be sorted, 
        compares adjacent elements, and swaps them if they are in the wrong order. 
        The pass through the list is repeated until no swaps are needed,
        which indicates that the list is sorted. */

// Method 1: 
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// Example usage:
let array = [5, 3, 8, 1, 9, 4];
console.log("Original array:", array);
let sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);
