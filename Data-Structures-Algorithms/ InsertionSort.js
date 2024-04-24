// Q.  Insertion Sort
/* Insertion sort is a simple sorting algorithm that builds the final sorted array one element at a time.
   It iterates through the input list, removing one element at a time and 
   finding its correct position within the sorted part of the list. */


   // Method 1 : 

   function insetionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j];
            j = j -1;
        }
        arr[j + 1] = numberToInsert;
    }
}
const arr = [8, 20, -2, 4, -6]
insetionSort(arr)
console.log(arr) // [ -6, -2, 4, 8, 20 ]
