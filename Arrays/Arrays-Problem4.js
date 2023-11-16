// Q. Find the 2nd min element from the given int array?

const givenArray = [5, 2, 8, 1, 7];
let sort = givenArray.sort(secondMin)
function secondMin(num,index) {
    return num - index;
}
let second = sort[1]
console.log("sorted array is", sort)
console.log("second minimum value is", second)