// Q. what is Binary Search 
/* Ans. 1.The array must be sorted in ascending (or descending)
 order for binary search to work correctly. */
/* 2. Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item,
 until you've narrowed down the possible locations to just one. */
/* 3.. Calculate the middle index of the search space: mid = (low + high) / 2,
 where low is the index of the first element and high is the index of the last element. */

// Method 1 Program .

function searchIndex(array, number) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let midIndex = Math.floor((min + max) / 2);
        if (array[midIndex] < number) {
            min = midIndex + 1;
        } else if (array[midIndex] > number) {
            max = midIndex - 1;
        } else {
            return midIndex;
        }
    }
    return -1;
}
result = searchIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7)
console.log(result) // 6
