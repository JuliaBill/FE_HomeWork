//Rekursija

function progression(num) {
  if (num <= 0) throw new Error("the number should be positive");
  if (num == 1) return num;
  return progression(num - 1) + num;
}
console.log(progression(-5)); // progression = S , num = n

function S(n) {
  if (n <= 0) throw new Error("the number should be positive");
  if (n == 1) return n;
  return S(n - 1) + n;
}

console.log(S(5));

//
function S(n) {
  if (n <= 0) throw new Error("the number should be positive");

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(S(5));

function F(n) {
  if (n <= 0) throw new Error("the number should be positive");
  else if (n == 1) return 0;
  else if (n == 2) return 1;
  return F(n - 1) + F(n - 2);
}

console.log(F(8));

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
  return "The number you're looking for is not here";
}

console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90], 80));
