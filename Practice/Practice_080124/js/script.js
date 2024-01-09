// 0. отфильтровать нечетные числа
const numbers111 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers111.filter((item) => item % 2 !== 0);
console.log(newNumbers);

// 1. сформируйте массив из чисел, которые меньше 30.
const numbers1111 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39];
const newArr = numbers1111.filter((item) => item < 30);
console.log(newArr);

// 2. Отфильтровать строки длинее 5 символов
const words = ["apple", "cat", "banana", "dog", "elephant", "car", "bat"];

const newWords = words.filter((item) => item.length > 5);
console.log(newWords);

// 3. Оставить только строки
const mixedTypes = [
  123,
  "apple",
  { fruit: "apple" },
  "banana",
  true,
  "car",
  false,
];
mixedTypes.filter((item) => typeof item === "string");
console.log(string);

// 4. Офильтровать строки которые начинаются на a
const words2 = ["apple", "banana", "apricot", "grape", "avocado", "kiwi"];

const newWords2 = words2.filter((item) => item.startsWith("a"));

console.log(newWords2);

//  5. Отфильтровать строки, которые не содержат букву e
const words3 = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi"];

const newWords3 = words3.filter((item) => !item.includes("e"));
console.log(newWords3);

// 6. Посложнее. Отфильтровать студентов с оценками выше 80
const students = [
  { name: "John", grade: 85 },
  { name: "Jane", grade: 78 },
  { name: "Doe", grade: 90 },
  { name: "Smith", grade: 76 },
  { name: "Chris", grade: 81 },
];

const bestStudents = students.filter((num) => num > 80);
console.log(bestStudents);

// 7. Сложная. Отфильтровать повторяющиеся числа
// можно использовать indexOf()
const duplicates = [1, 2, 3, 2, 4, 5, 5, 6, 7, 8];
const newArr1 = duplicates.filter((item) => item !== item);
console.log(newArr1);
