function Armstrong(num) {
  // 13 + 53 + 33 = 153

  var temp = 0;
  var count = 0;
  var sum = 0;
  let lastVar = 0;

  temp = num;

  while (temp > 0) {
    temp = parseInt(temp / 10);
    count++;
  }

  temp = num;
  while (temp > 0) {
    lastVar = temp % 10;
    sum += Math.pow(Number(lastVar), count);
    temp = parseInt(temp / 10);
  }

  console.log(count, sum);
  if (sum === num) {
    return "is an Armstrong Number";
  }
  return "is Not an Armstrong Number";
}

console.log("153 :" + Armstrong(153));
console.log("22 :" + Armstrong(22));
console.log("60 :" + Armstrong(60));
console.log("1634 :" + Armstrong(1634));
console.log("92727 :" + Armstrong(92727));
