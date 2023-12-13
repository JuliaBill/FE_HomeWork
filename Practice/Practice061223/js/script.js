// const age = 30;

// console.log(`I am ${age} years old`);

// const str = "String";
// const str2 = "string2";

// const firstName = "Ivan";
// console.log(`My name is ${firstName}`);

// 1. создать функцию, которая будет вставлять имя пользователя в строку

// const userName = "Anna";
// const userAge = 30;

// function userInformation(name, age) {
//   return `My name is ${name}`;
// }
// console.log(userInformation("Julia", 42));
// console.log(userInformation("Ivan", 24));
// console.log(userInformation(userName, userAge));

// function userInformation(name, age) {
//   return `Привет ${name}! Вам ${age}`;
// }
// console.log(userInformation(userName, userAge));

// function devisionByThree(number) {
//   return number % 3 === 0;
// }
// console.log(devisionByThree);

// 3. написать функцию которая проверяет больше число нуля или нет
// если больше true
// moreThanZero
function moreThanZero(number) {
  return number > 0;
}
console.log(moreThanZero(4));

// 4. проверить возраст клиента, можно ли ему продавать алкоголь
// age больше 18
// sellAlcohol
// возвращаем boolean

// принимает второй параметр license
// если есть документ и больше 18
// license - булевое значения

// Оператор  И

// function sellAlcohol(age, license) {
//   return age >= 18 && license;
// }
// console.log(sellAlcohol(18, true));

// 7. написать функцию, которая проверяет является ли тип данных строкой
// isString
// typeof
// === 'string'
// возвращается буллевое значение

function isString(data) {
  return typeof data === "string";
}
console.log(isString(typeof "Hello"));
console.log(isString(typeof 4));

//8. написать функцию которая проверяет является ли три числа cторонами трeугольника
// isTriangle
// три стороны

function isTriangel(a, b, c) {
  return a + b >= c && b + c > a;
}
console.log(isTriangel(5, 5, 10));
