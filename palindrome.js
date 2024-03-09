/**
 * Create a palindrome
 */

// const str = "aaabnhgksx";
const str = "madam";
function palidromeNew(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(
    newStr,
    "...reverse : ",
    str.split("").reverse().join("") === newStr
  );
}

function palindrome(str) {
  let interval = str.length / 2;
  var divisble = str.length % 2 == 0;

  interval = divisble ? interval : Math.round(interval);

  var str1 = divisble ? str.substr(0, interval) : str.substr(0, interval - 1);
  var str2 = str.substr(interval, str.length);

  var end = divisble ? interval - 1 : interval - 2;
  var note;
  for (i = 0; i < interval; i++) {
    if (str1.charAt(i) == str2.charAt(end)) {
      note = true;
    } else {
      note = false;
    }
    end--;
  }
  note
    ? console.log("It is a palindrome")
    : console.log("It is not a palindrome");
  console.log("==============");
  console.log(str1 == str2.split("").reverse().join(""));
}

palidromeNew(str);
