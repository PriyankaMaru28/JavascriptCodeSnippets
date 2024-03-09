// function RunLength(str) {
//   var temp = "";
//   var newMap = new Map();
//   var newArr = [];

//   for (var i = 0; i < str.length; i++) {
//     if (temp === str[i]) {
//       newMap.set(str[i], newMap.get(str[i]) + 1);
//     } else {
//       temp = str[i];
//       newMap.set(str[i], 1);
//     }
//   }

//   // Convert Hashmap to array (in particular format) to String

//   for (var ele of newMap) {
//     newArr.push(ele[1], ele[0]);
//   }
//   const newStr = newArr.flat().join("");
//   return newStr;
// }

function RunLength(str) {
  var temp = "";
  var arr = [];
  let count;

  for (var i = 0; i < str.length; i++) {
    if (temp === str[i]) {
      count++;
      arr[arr.length - 2] = count;
    } else {
      temp = str[i];
      count = 1;
      arr.push(count, str[i]);
    }
  }

  return arr.join("");
}

function RunLengthStr(str) {
  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += count + str[i];
      count = 1;
    }
  }

  return result;
}

// console.log(RunLength("aabbccdddefddddddd"));
// console.log(RunLength("wwwbbw"));
console.log(RunLengthStr("aabbbccde"));
