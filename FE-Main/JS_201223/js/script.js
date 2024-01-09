function add(a, b) {
  return a + b;
}
let sum = add(5, 3);
console.log(sum);

const addv2 = () => {
  console.log("Hello Expression");
};
addv2();

const addv3 = (a, b) => {
  return a + b;
};
// let sumV2 = addv3(5, 3);
console.log("Expression", addv3(5, 3));
// console.log(sumV2);

let count = 0;

// setTimeout(() => {
//   count++;
//   console.log("Count", count);
// }, 7000);

// let cars = ["BMW", "Mercedes", "Audi", "Opel"];

// let numbers = [2, 3, 4, 5, 8, 9];

// const getSquare = (x) => x ** 2;

// numbers = numbers.map((num) => num ** 2);
// console.log(numbers);

// const customMap = (arr, callback) => {};
// console.log(customMap(numbers, getSquare));

let cars = ["BMW", "Mercedes", "Audi", "Opel"];

let filteredCars = cars.filter((car) => car[0] === "A");
console.log(cars, filteredCars);

let filteredCars1 = cars.filter((car) => car.indexOf("e") !== -1);
console.log(cars, filteredCars1);
let search = "e";
let filteredCars2 = cars.filter(
  (car) => car.toLocaleLowerCase().indexOf(search.toLowerCase()) !== -1
);

console.log(cars, filteredCars2);
