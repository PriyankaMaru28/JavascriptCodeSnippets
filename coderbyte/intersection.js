/**
 * Find Intersection
Have the function FindIntersection(strArr) read the array of strings stored in strArr 
which will contain 2 elements: 
    the first element will represent a list of comma-separated numbers sorted in ascending order, 
    the second element will represent a second list of comma-separated numbers (also sorted). 

Your goal is to return a comma-separated string containing the numbers that occur in 
elements of strArr in sorted order. If there is no intersection, return the string false.
Examples
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13
Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
 * 
 */

function FindIntersection(strArr) {
  const [arr1, arr2] = strArr.map((x) => x.split(",").map((x) => parseInt(x)));
  const s = new Set(arr2);

  return arr1.filter((ele) => s.has(ele)).join(",") || "false";

  //   newArr = [];
  //   arr1.map(()=>{
  //     if(arr2.includes(arr1[i])){
  //         newArr.push(arr1[i])
  //     }
  //   })
}

function findIntersect(strArr) {
  let str = strArr
    .join(",")
    .split(",")
    .sort((a, b) => a - b);

  let arrNew = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      arrNew.push(str[i]);
    }
  }

  const strNew = arrNew.join(",");

  return strNew.length > 0 ? strNew : false;
}

console.log(FindIntersection(["1, 3, 4, 7, 23, 13", "1,15,23,19"]));
