 
 // Q. Merge Sort Algorithm
 /* Ans. The Merge Sort algorithm is a divide-and-conquer sorting algorithm
  known for its efficiency and stability. It divides the unsorted list into smaller sublists,
sorts each sublist recursively using Merge Sort, and then merges the sorted sublists
 to produce the final sorted list.  */

 /* Algorithm Step :Algorithm Steps:
Divide the unsorted list into two roughly equal halves.
Recursively sort each half using the Merge Sort algorithm until 
each sublist contains only one element (which is already sorted).
Merge the sorted sublists by comparing the elements from each sublist 
and combining them into a single sorted list.Continue merging until the entire list is sorted. */

// Mathod 1 : 

function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}
function merge(leftArr, rightArr){
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr, ...rightArr]
}

const arr = [8, 20, -2, 4, -6]
console.log(mergeSort(arr))
