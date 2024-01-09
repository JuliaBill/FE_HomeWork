function progression(n) {
  if (n <= 0) throw new Error("the number shuld be positive");
  if (n == 1) return 1;
  return progression(n - 1) + n;
}

console.log(progression(5));

let index = 0;

for (let i = 0; i < 10; i += index) {
  console.log(i);
  index++;
}

function progression(n) {
  if (n <= 0) throw new Error("the number should be positive");
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(progression(5));

function Fibonacci(n) {
  if (n <= 0) throw new Error("the number should be positive");
  if (n == 1) return 0;
  if (n == 2) return 1;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(6));
function Fibonacci(n) {
  if (n <= 0) throw new Error("the number should be positive");
  // if (n == 1) return 0;
  // if (n == 2) return 1;
  let item1 = -1;
  let item2 = 1;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = item1 + item2;
    item1 = item2;
    item2 = sum;
  }
  return sum;
}

console.log(Fibonacci(4));
function Fibonacci(n) {
  if (n <= 0) throw new Error("the number should be positive");
  if (n == 1) return 0;
  if (n == 2) return 1;
  let item1 = 0;
  let item2 = 1;
  let sum = 0;
  for (let i = 3; i <= n; i++) {
    sum = item1 + item2;
    item1 = item2;
    item2 = sum;
  }
  return sum;
}

console.log(Fibonacci(5));
function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (end >= start) {
    let mid = Math.floor((start + end) / 2);
    if (num > arr[mid]) {
      start = mid + 1;
    } else if (num < arr[mid]) {
      end = mid - 1;
    } else return mid;
  }
  return "the number you're looking for is not here";
}

console.log(binarySearch([1, 2, 3, 4, 5, 9, 12], 8));
function binarySearch(arr, num, start, end) {
  if (start > end) return "the number you're looking for is not here";
  let mid = Math.floor((start + end) / 2);
  if (num > array[mid]) {
    return binarySearch(arr, num, mid + 1, end);
  } else if (num < array[mid]) {
    return binarySearch(arr, num, start, mid - 1);
  } else return mid;
}

let array = [1, 2, 3, 4, 5, 9, 12];
console.log(binarySearch(array, 9, 0, array.length - 1));
