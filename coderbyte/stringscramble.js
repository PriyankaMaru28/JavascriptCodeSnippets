function StringScramble(str1, str2) {
  let count = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1.includes(str2.charAt(i))) {
      count++;
    }
  }

  return count === str2.length ? true : false;
}

console.log(StringScramble("rkqodlw", "world"));
console.log(StringScramble("h31lko", "hello"));
console.log(StringScramble("cdore", "coder"));
console.log(StringScramble("3415ko", "hello"));
