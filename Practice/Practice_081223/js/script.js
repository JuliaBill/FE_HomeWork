const number2 = Math.random() * 10;
// console.log(number2.toFixed(2));
// console.log(Math.floor(number2));
// console.log(Math.ceil(number2));
// console.log(Math.round(number2));

const arrayofUsers = ["Ivan", "Peter", "Oleg", "Vasya"];
// const userIndex = Math.floor(Math.random() * arrayofUsers.length);
// const randomUser = arrayofUsers[userIndex];
// console.log(randomUser);

function randomUser(arr) {
  const userIndex = Math.floor(Math.random() * arr.length);
  const user = arr[userIndex];
  return user;
}
console.log(randomUser(arrayofUsers));
console.log(randomUser(arrayofUsers));
console.log(randomUser(arrayofUsers));
console.log(randomUser(arrayofUsers));

const str1 = "Hello";
const str2 = "World";
const str3 = "Bye";

console.log(str1.length);

function stringLength(str) {
  return str.length;
}
console.log(stringLength(str1));
console.log(stringLength(str3));
console.log(stringLength(str3));

function concat(text1, text2) {
  return text1 + text2;
}
console.log(concat("1", "2"));

function passwordLength(str) {
  str.length > 8 && typeof str === "string";
}

// console.log(passwordLength("1232455"));
console.log(typeof "1" === "string");

function passwordLength(str) {
  if (str.length > 8 && typeof str === "string") {
    return `Добро пожаловать`;
  } else {
    return "Пароль неверный, должен быть строкой и иметь более 8 символов";
  }
}
console.log(passwordLength(847385785701));
console.log(passwordLength("jhfhgsdghdhg"));

function showMark(num) {
  if (typeof num !== "number" || num > 100 || num < 70) {
    return "Данные дролны быть числом - меньше 100 и больше 70";
  }
  if (num > 90) {
    return "A";
  } else if (num > 80) {
    return "B";
  } else {
    return "C";
  }
}
console.log(showMark(79));
