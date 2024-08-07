// Q. Selection Sort

/* Ans. Selection sort is a simple sorting algorithm that works by repeatedly selecting
 the smallest (or largest) element from the unsorted 
portion of the list and swapping it with the element at the beginning of the unsorted portion.
 This process continues until the entire list is sorted.  */

// Method 1 :
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      if (i !== min) {
        temp = array[i];
        array[i] = array[min]
        array[min] = temp;
      }
    }
    return array;
  }
  const res = selectionSort([0, 2, 34, 22, 10, 19])
  console.log(res) // [0,2,10,19,22,34]