// let i;
// for (i = 0; i < 5; i++) {
//   if (i % 2 == 0) console.log(i + " is an even number");
//   else console.log(i + " is an odd number");
// }

// function maxElement(array) {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) max = array[i];
//   }
//   return max;
// }

// let array = [1, 2, 3, 5, 4, 1, 1, 1, 2, 0, -5, 6];
// console.log(maxElement(array));

// function minElement(array) {
//   let min = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < min) min = array[i];
//   }
//   return min;
// }

// let array = [1, 2, 3, 5, 4, 1, 1, 1, 2, 0, -5, 6];
// console.log(minElement(array));

// Переделайте присланный вам код таким образом, чтобы на экран выводились только те пары, которые дают в сумму 50.
// let array = [0, 10, 20, 30, 40, 50];

// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] + array[j] == 50)
//       console.log("i=" + array[i], "j=" + array[j]);
//   }
// }
// Создать функцию, которая принимает два аргумента: массив и число, которому должна равняться сумма пар нашего массива.

// function sum(array, num) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] == num)
//         console.log("i=" + array[i], "j=" + array[j]);
//     }
//   }
// }

// let arr = [0, 10, 20, 30, 40, 50];
// sum(arr, 40);

// let a = 5;
// let b = 6;

// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

let array = [50, 40, 30, 20, 10];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length - 1 - i; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(array);
