/**
 * Simple Mode - Medium
Have the function SimpleMode (arr) take the array of numbers stored in arr and 
return the number that appears most frequently (the mode) Ior example: if arr 
contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode 
return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 
5 because it appeared first). If there is no mode return -1. The array will not be empty.
Examples
Input: [5,5,2,2,1]
Output: 5
Input: [3,4,1,6,10]
Output: -1
 * @param {*} arr 
 * @returns 
 */

function SimpleMode(arr) {
  const hasharr = new Map();
  var temp = 0;
  let count = 1;

  for (var i in arr) {
    if (!hasharr.has(arr[i])) {
      hasharr.set(arr[i], 1);
    } else {
      hasharr.set(arr[i], hasharr.get(arr[i]) + 1);
    }
  }

  const sortedMap = Array.from(hasharr).sort((a, b) => a[1] - b[1]);
  console.log(hasharr);
  console.log(sortedMap);

  return sortedMap.flat()[0];
}

console.log(SimpleMode([6, 5, 4, 5, 4, 3, 1]));
console.log(SimpleMode([3, 4, 3, 1, 7, 6, 1]));
