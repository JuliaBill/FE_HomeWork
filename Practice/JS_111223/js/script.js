for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let a = 1;
a += 2; // a = a + 2
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

for (let i = 16; i >= 8; i -= 3) {
  console.log(i);
}

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }
// console.log(sum);

let result = 50;
for (let i = 10; i >= 1; i--) {
  result = result - i;
  console.log(i);
  console.log(result);
}

console.log(result);

for (i = 1; i <= 20; i++) {
  if (i % 5 === 0) console.log(i);
}

sum1 = 0;
for (i = 1; i <= 20; i++) {
  if (i % 5 === 0) sum1 += i;
}
console.log(sum1);

for (let i = 1; i <= 20; i++) {
  if (i % 5 === 0 && i % 3 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
