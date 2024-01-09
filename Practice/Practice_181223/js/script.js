// trim();
// // написать функцию кот принимает строку и возвращает строку очищенную от пробелов
// function trimString(str) {
//   return str.trim();
// }
// console.log(" I love Javascript ");

// function checkSubstring(str, substr) {
//   return str.startWith(substr);
// }
// console.log(checkSubstring("I love Javascript", "I don´t love Javascript"));

console.log("aaa".at(0)); // оcтаток слова через slice(1)
// if else
// если слово содержит подстроку, то сделай его целиком заглавными буквами
// не соджержит то сделать первую букву заглавной
// to UpperCase()
// slice() - чтобы выбрать буквы со второй по последнюю
// обратиться к первой букве str.at(0)

function checkStrSubstr(str, substr) {
  if (str.includes(substr)) {
    return str.toUpperCase();
  } else {
    return str.at(0).toUpperCase() + str.slice(1);
  }
}

// функция она принимает два параметра - имя, второй - фамилия
// вернуть инициалы John White J.W.
// ivan petrov -> I.P.
// at + upperCase + concatanation +

console.log(checkStrSubstr("apple", "app"));
console.log(checkStrSubstr("apple", "bb"));

function FullName(firstname, secondname) {
  return (
    firstname.at(0).toUpperCase() + "." + secondname.at(0).toUpperCase() + "."
  );
}
console.log(FullName("John", "White"));

// то же самое - Одна строка "John White" - разделить (метод строки делит оп пробелу)
const oneStr = "John White";
function oneStr(str1) {
  return str1.split(" ");
  const newarr = oneStr;
}

console.log(oneStr("John White"));
