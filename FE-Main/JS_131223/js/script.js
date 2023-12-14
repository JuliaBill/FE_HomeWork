// let car1 = "BMW";
// let car2 = "Mercedes Benz";
// let car3 = "Volvo";

// document.write(`<h1>${cars[0]}</h1>`);
// document.write(`<h1>${cars[1]}</h1>`);
// document.write(`<h1>${cars[2]}</h1>`);
// document.write(`<h1>${cars[3]}</h1>`);

// console.log(cars[1]);
// cars[8] = "Opel";
// console.log("cars".cars);

// console.log(cars.length);

// for (let i = 0; i < cars.length; i++) {
//   document.write(`<h1>${cars[3]}</h1>`);
// }

// let cars = ["BMW", "Mercedes", "Volvo", "Audi"];

// cars.push("Land Rover", "Lamborghini");
// console.log("cars".cars);

// cars.pop();
// console.log(cars);

// cars.unshift("Land Rover");
// console.log(cars);
// cars.shift();

// let countries = ["Malta", "Greenland", "Panam", "Armenia"];
// let people = [44153, 60055, 904540, 1000000];

// for (let i = 0; i < countries.length; i++) {
//   document.write(`<p>${countries[i]} - ${people[i]}</p>`);
// }
// console.log([i]);

// countries.splice(1, 1);
// console.log(countries);
//  let x = countries.splice (1,2);
//  console.log(x);

// let newCountry = countries.slice();
// let newCountry = countries.slice(1, 2);
// console.log(countries, newCountry);

let countries = ["Malta", "Greenland", "Panama", "Armenia"];

// console.log(countries.indexOf("Panama"));
// console.log(countries.indexOf("USA"));
// console.log(countries.indexOf("Greenland", 2));
// console.log("Hello world!!!".indexOf("o"));

//  let text = "Hello";
//  console.log(text[0]);

let numbers = [10, 20, 15, 3, 80, 60];
let maxNumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}
console.log(maxNumber);

let even = 0,
  odd = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even++;
  } else odd++;
  {
    console.log(even, odd);
  }
}

let str = "apple, banana, orange";
// let arr = str.split(",");
// console.log(arr);
// str = arr.join(" ");
// console.log(str);
// let arr = str.split("");
// arr = arr.join("");
// console.log(arr);

let str1 = "I love Javascript";
str = str1.toUpperCase();
