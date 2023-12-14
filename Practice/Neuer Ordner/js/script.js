// const numbers1 = [6, 10, 11, 9, 12, 25, 30];
// // 1. Посчитать сумму чисел в массиве

// for (let i = 0; i < numbers1.length; i++) {
//   let sum1 = 0;
//   console.log(numbers1[i]);
//   sum1 += numbers1[1];
// }
// console.log(sum1);

// // получить элемент = массив[индекс]
// // 3. посчитать сумму чисел у которых индекс кратен трем

// numbers1[0]; //  к элементу по индексу

// let sum1 = 0;
// for (let i = 1; i < numbers1.length; i++) {
//   if (i % 3 === 0) sum1 += numbers1[i];
// }
// console.log(sum1);

// // 4. Написать функцию которая выводит среднее арифметическое чисел массива
// function average(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// 5. Скопировать массив в новый используя push
// push добавляет элемент в конец массива
// let cars = ["BMW", "Mercedes Benz", "Volvo", "Audi"];
// cars.push("Land Rover", "lamborghini");

// пройтись циклом по массиву ourArray
// в newArray.push(ourArray[i])

// for (let i = 0; i < ourArray.length; i++) {
//   newArray.push(ourArray[i]);
//   // console.log(newArray)
// }

// console.log(newArray);

const ourArray = [6, 10, 11, 9, 12, 25, 30, 10, 90];
const newArray = [];

for (let i = 0; i < array.length; i++) {
  newArray.unshift(ourArray[i]);
  console.log(newArray);
}

// 9. Скопировать слово Javascript slice
const str = "JavaScript is awesome";
const js = str.slice(0, 10);
console.log(js);

// 10. Написать функцию, которая разделяет строку на буквы ''
// испольовать метод сплит
const word = "Hello";

console.log(word.split(""), reverse(), join(""));

function reversString(str) {
  return str.split("").reverse().join("");
}
console.log(reversString("world"));
