function PrimeNumber(num) {
  var isPrime = true;

  if (num === 1 || num === 0) {
    isPrime = false;
  }

  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }

  if (isPrime) {
    return "is a Prime Number";
  } else {
    return "Not a Prime Number";
  }
}

console.log("2 :", PrimeNumber(2));
console.log("5 :", PrimeNumber(5));
console.log("11 :", PrimeNumber(11));
console.log("50 :", PrimeNumber(50));
console.log("10 :", PrimeNumber(10));
console.log("68 :", PrimeNumber(68));
