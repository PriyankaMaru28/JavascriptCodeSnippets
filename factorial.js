function Factorial(num) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  // console.log(fact);
  return fact;
}

function FactorialRec(num) {
  if (num === 0) return 1;

  return num * FactorialRec(num - 1);
}

console.log(Factorial(5));
console.log(FactorialRec(5));
