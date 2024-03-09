// 0 1
// count(5) = 0 1 1 2 3 5
const arr = [0, 1];
function fibo(count) {
  console.log(arr);
  for (var i = 2; i < count; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  console.log(arr);
}

// fibo(5);

// fibo(5) + fibo(5-1)+fibo()

//f(n) = f(n-1) + fn(n-2)

function newFibo(count) {
  var temp = 0,
    temp1 = 1,
    sum = 0,
    arr = [temp, temp1];
  for (var i = 2; i < count; i++) {
    sum = temp1 + temp;
    temp = temp1;
    temp1 = sum;
    arr.push(sum);
  }

  console.log(arr);
}

newFibo(7);
// 0 1 1 2 3
// 0 1 1
