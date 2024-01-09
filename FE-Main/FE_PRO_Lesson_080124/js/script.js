// Пишем реализацию функции makeCoffee. Она принимает 2 аргумента: сорт кофейных зерен (строка), и название воды (строка). Результатом функции также должна быть строка "Ваш кофе готов: вода такая-то, зерна такие-то. Объем 200мл".:

// function makeCoffee(coffee, water) {
//   return `Ihr Kaffe ist fertig: Wasser ${water}, Bohnen ${coffee}. Vol.200ml`;
// }
// const myCoffee = makeCoffee("Arabica", "Borjomi");
// console.log(myCoffee);

const makeCoffee2 = (coffee, water) =>
  `Ihr Kaffe ist fertig: Wasser ${water}, Bohnen ${coffee}. Vol.200ml`;

console.log(makeCoffee2("Arabica", "Borjomi"));

const sum = (a, b) => a + b;

const makeCoffee3 = (beansKind, water, coffeeType) => {
  let totalVolume = 0;
  // if (coffeeType === 'espresso') {
  //   totalVolume = 200;
  // }
  // else if (coffeeType === 'americano') {
  //   totalVolume = 300;
  // }
  // else if (coffeeType === 'double espresso') {
  //   totalVolume = 400;
  // }
  // else {
  //   totalVolume = 50;
  // }
  switch (coffeeType) {
    case "espresso": {
      totalVolume = 200;
      break;
    }
    case "americano": {
      totalVolume = 300;
      break;
    }
    case "double espresso": {
      totalVolume = 400;
      break;
    }
    default: {
      totalVolume = 50;
    }
  }
  return `Your coffee is ready: water ${water}, beans ${beansKind}. Vol.${totalVolume}ml`;
};
console.log(makeCoffee3("Arabica", "Borjomi", "americano"));

// const array = ["simple", "array"];

// array.forEach((elem) => {
//   console.log(elem);
// });

// numbers.forEach((number) => {
//   const square = number ** 2;
//   console.log(square);
// });

let sum2 = 0;
numbers.forEach((number) => {
  sum2 = sum2 + number;
});
console.log(sum2);

numbers.forEach((number) => {
  if (number % 2 !== 0) {
    console.log(number);
  }
});

const strings = ["this", "is", "an", "array", "of", "simple", "strings"];

strings.forEach((word) => {
  if (word.length < 5) {
    console.log(word);
  }
});

const arr = [1, 2, 3, 4, 5];

// const newNumbers = arr.filter((item) => {
//   return item % 3 === 0;
// });
// console.log(newNumbers);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const newNumbers1 = numbers.filter((item) => {
  return item % 3 === 0;
});
console.log(newNumbers1);

const newString = strings.filter((word1) => {
  return word1.length > 4;
});
console.log(newString);

const stringA = strings.filter((word2) => {
  return word2.includes("a");
});
console.log(stringA);
