// HomeWork_JS_One
// 1. Функция subtract() будет выполнять вычитание двух чисел и возвращать результат.

function subtract() {
  let currentValue1 = +document.querySelector(".input-3").value;
  let currentValue2 = +document.querySelector(".input-4").value;
  let result = currentValue1 - currentValue2;

  console.log(result);
}

// 2. Функция multiply() будет выполнять умножение двух чисел и возвращать результат.

function multiply() {
  let currentValue1 = +document.querySelector(".input-5").value;
  let currentValue2 = +document.querySelector(".input-6").value;
  let result = currentValue1 * currentValue2;

  console.log(result);
}

// 3. Функция divide() будет выполнять деление двух чисел и возвращать результат.

function divide() {
  let currentValue1 = +document.querySelector(".input-7").value;
  let currentValue2 = +document.querySelector(".input-8").value;
  let result = currentValue1 / currentValue2;

  console.log(result);
}

// 4 Функция getMinutes() будет получать количество часов и возвращать количество минут
function getMinutes() {
  let currentValue1 = +document.querySelector(".input-9").value;
  let result = currentValue1 * 60;

  console.log(result);
}

// 5 Функция calculateAverage() будет показывать среднее значение из трех чисел

function calculateAverage() {
  let currentValue1 = +document.querySelector(".input-10").value;
  let currentValue2 = +document.querySelector(".input-11").value;
  let currentValue3 = +document.querySelector(".input-12").value;
  let result = (currentValue1 + currentValue2 + currentValue3) / 3;

  console.log(result);
}
