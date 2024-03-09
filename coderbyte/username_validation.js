/**
 * Codeland Username Validation
 * Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine 
 * if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore , dollar character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.

Examples
Input: "aa_"
Output: false
Input: "u__hello_world123"
Output: true
 * 
 * 
 */

function CodelandUsernameValidation(str) {
  const regex = /^[a-zA-Z][a-zA-Z0-9_$]{2,24}(?<!_)$/g;

  return regex.test(str);
}

// keep this function call here
console.log(CodelandUsernameValidation("aa__"));

console.log(CodelandUsernameValidation("u__hello_world$123"));

console.log("WITHOUT REGEX");

function isValid(str) {
  if (4 < str.length < 25) {
    if (str.charAt(0).match(/[a-zA-Z]/g)) {
      if (str.charAt(str.length - 1) != "_") {
        console.log(str + " is a valid username");
        return true;
      }
    }
  }
  return false;
}

console.log(isValid("u__hello_world123"));
console.log(isValid("as_12"));
