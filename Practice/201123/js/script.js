// function greet(name) {
//   console.log("Hello, ${name}!");
// }

// let greet2 = (name) => console.log("Hello, ${name}!");

// const calculateArea = (length, width) => length * width;

// const sayGoodBye = () => console.log("Goodbye!");
// sayGoodBye();

// const isEven = (number) => number % 2 === 0;
// isEven();

// const reverseString = (str) => str.split("").reverse().join("");

// const stringLength = (str) =>
//   console.log(`the length of "${str}" is:`, str.length);
// stringLength("fjj");

// setTimeout(() => console.log("Hi!"), 3000);

// setTimeout(() => sayHi("Ivan"), 1000);

// setTimeout(function () {
//   sayHi("Ivan");
// }, 1000);

// setTimeout(() => sayHi("Vlad"), 1000);

// const words1 = ["apple", "banana", "cherry"];
// const newArr = words1.map((element) => element.length);
// console.log(newArr);

// const users = [
//   "john",
//   "emma",
//   "david",
//   "sophia",
//   "alex",
//   "olivia",
//   "william",
//   "mia",
//   "james",
//   "ava",
// ];
// const newUsers = users.map((element) => element.toUpperCase);
// console.log(newUsers);

//Summary 22.12.23

function sayHi() {
  console.log("Hi");
  return "hi";
  console.log("after"); // funktioniert nicht
}

sayHi();
sayHi();

const checkDivisionByThree = (number) => number % 3 === 0;
console.log(1);

// const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const forEach1 = numbers6.forEach((el) => el * 2);
// const map1 = numbers6.map((el) => el * 2);
// console.log(forEach1);
// console.log(map1);
// console.log(numbers6);

// 1. Сделать все числа положительными
const numbers3 = [1, -2, 3, -4, 5];

const forEach2 = numbers3.map((el) => {
  if (el < 0) {
    return Math.abs(el);
  } else {
    return el;
  }
});
console.log(forEach2);

// const map1 = numbers6.map((element, index, array) => {
//   if (index % 3 === 0) {
//     return element * 2;
//   } else {
//     return element;
//   }
// });

const numbers4 = [5, 10, 15, 29];
const allStrings = numbers4.map((element) => element.toString());
console.log(allStrings);

const numbers50 = [1, 2, 3, 4, 5];
const newElement = numbers50.map((element, index) => element * index);
console.log(newElement);

// 4. Прибавить к числу 10 если его индекс кратен 3
const numbers61 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers61.map(function (element, index) {
    if () {
     
    } else {
        
 }
})