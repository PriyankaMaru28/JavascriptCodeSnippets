function SwapII(str) {
  var newStr = [];
  var start = 0;
  var end = 0;
  for (var i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      newStr.push(str[i].toUpperCase());
    } else if (/[A-Z]/.test(str[i])) {
      newStr.push(str[i].toLowerCase());
    } else {
      newStr.push(str[i]);
    }
  }

  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[0-9]/)) {
      start = i;
      for (var j = i; j < str.length; j++) {
        if (str[j].match(/[0-9]/)) {
          end = j;

          var substring = str.substring(start, end);
          //console.log("substring..", substring, "..", str[j]);

          if (substring.match(/[a-z]/i)) {
            newStr.splice(i, 1, str[end]);
            newStr.splice(j, 1, str[start]);
            break;
          }
        }
      }
    }
  }

  newStr = newStr.join("");

  return newStr;
}

console.log("Hello -5LOU6 : ", SwapII("Hello -5LOU6"));
console.log("s g DU4D5E : ", SwapII("s g DU4D5E"));
//console.log("2s 6TUYR8 4DUG5E : ", SwapII("2s 6TUYR8 4DUG5E"));
