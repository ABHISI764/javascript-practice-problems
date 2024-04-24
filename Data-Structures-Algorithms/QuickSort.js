// Q. Quick Sort Algorithm
/* Ans. Quick Sort is a highly efficient, comparison-based sorting algorithm that uses a divide-and-conquer approach
to sort elements in an array or list. It works by selecting a "pivot" element from the array
and partitioning the other elements into two subarrays based on whether they are less than or greater than the pivot.
The process is then applied recursively to the subarrays until the entire array is sorted.  */

//Algorithm Steps:
/*
Choose a pivot element from the array. This pivot element can be selected in different ways (e.g., first element, last element, median element, or a random element). Choosing a good pivot helps in achieving better performance.
Partition the array into two subarrays: elements less than the pivot and elements greater than the pivot.
Recursively apply Quick Sort to the subarrays.
Concatenate the sorted subarrays along with the pivot element to produce the final sorted array.
*/

// Method 1:
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
const arr = [8, 20, -2, 4, -6]
console.log(quickSort(arr))