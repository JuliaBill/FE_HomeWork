let a = 10;
let b = 20;
let d = 30;
let c = false;

let user = "Jon";
let user1 = null;

// &&
// console.log(a && b); //20
// console.log(c && a);
// console.log(a && true && d);
// console.log( 5 > 4 && 2 > 4)

// ||
// console.log(a || b);
// console.log(c || b);
// console.log(user1 || "Not found");
// console.log( 5 > 4 || 2 > 4)

// Логический оператор "!"
// console.log(!a)

// let toggle = false;
// console.log(!toggle);
// toggle = !toggle;
// console.log(!toggle);

function checkNumber() {
  let num = +document.querySelector(".input-1").value; // -1

  if (!isNaN(num)) {
    if (num > 0) {
      // 5 > 0
      console.log("The number is positive!");
    } else if (num < 0) {
      // -1 > 0
      console.log("The number is negative!");
    } else {
      // 0
      console.log("The number is zero!");
    }
  } else {
    console.log("It isn't number!");
  }
}

// Функция checkMax2 получает значения трех чисел, введенных пользователем
// в поля с классами "input-2", "input-2".
// Затем она сравнивает эти числа и выводит в консоль наибольшее из них.

function checkMax2() {
  let num1 = +document.querySelector(".input-2").value; // 4
  let num2 = +document.querySelector(".input-3").value; // 4

  if (num1 > num2) {
    console.log("First number is greater!");
  } else if (num1 < num2) {
    console.log("Second number is greater!");
  } else {
    console.log("Numbers are equal!");
  }
}

// Функция checkMax3 получает значения трех чисел, введенных пользователем
// в поля с классами "input-4", "input-5" и "input-6".
// Затем она сравнивает эти числа и выводит в консоль наибольшее из них.

function checkMax3() {
  let num1 = +document.querySelector(".input-4").value; // 3
  let num2 = +document.querySelector(".input-5").value; // 6
  let num3 = +document.querySelector(".input-6").value; // 7

  // 5 > 2 && 5 > 3 ~ 5
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num3) {
    // 6 > 4 ~ 6
    console.log(num2);
  } else {
    console.log(num3);
  }
}

// function increment() { falsch, zählt nur bis 1
//   let count = 0;
//   count = count + 1;
//   console.log(count);
// }

// let count = 0;
// function increment() {
//   count = count + 1;
//   // console.log(count);
//   document.querySelector(".result-1").innerText = count;
// }

// функция checking() предназначена для проверки значения переменной count
// и выполнения соответствующих действий в зависимости от того, является ли оно
// четным или нечетным. Задача функции состоит в увеличении значения count на 1
// и выводе результата на страницу, а также изменении цвета выводимого значения
// в зависимости от его четности.

function increment() {
  let color;
  count = count + 1; // 0 + 1 = 1 + 1 = 2 + 1 = 3

  // console.log(count); // 2 3
  if (count % 2 === 0) {
    // console.log(count, "even");
    color = "green";
  } else {
    // console.log(count, "odd")

    color = "red";
  }

  document.querySelector(".result-1").innerText = count;
  document.querySelector(".result-1").style.color = color;
}

let age = 20;
age = 30; // меняем значение
console.log(age);

// let age = 20;
// let age = 30;  oшибка, нельзя передекларировать
// console.log(age);
