function NumberSearch(str) {
  const numRegex = /[0-9]+/;
  const strRegex = /[a-z]/i;
  var numArr = [];
  var final = 0;

  let totalLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (numRegex.test(str[i])) {
      numArr.push(Number(str[i]));
    }
    if (strRegex.test(str[i])) {
      console.log("else if ", str[i]);
      totalLength++;
    }
  }

  if (numArr.length > 0) {
    final = numArr.reduce((acc, curr) => acc + curr);
    console.log("final..", final, "totalLength..", totalLength);
  }

  final = Math.round(final / totalLength);

  return final;
}

console.log(NumberSearch("H3ello9-9"));
console.log(NumberSearch("One Number*1*"));
