let str = "I love Javascript";
console.log(str.startsWith("i"));
console.log(str.startsWith("I"));
console.log(str.startsWith("love", 2));

str = str.trim();

let newstr = str.substring(0, 6);
console.log(newstr);

let str1 = "Hello, world... hello Javascript... Hello Frontend";
str1 = str1.replace(/Hello/, "hi");
console.log(str1);

str1 = str1.replace(/Hello/g, "hi");
console.log(str1);

str1 = str1.replace(/Hello/gi, "hi");
console.log(str1);

let str2 = "You can call this number +1674564067";
str2 = str2.replace(/[0-9]/g, "*");
console.log(str2);

let regexp = /call/g;
console.log(regexp.test(str2));
let regexp1 = /hello/g;
console.log(regexp.test(str2));

// let str3 = "I love javascript";
// str3 = str3.toLowerCase();

// str3 = str3.split(" ");
// for (let i = 0; i < str3.length; i += 2) {
//   return str3.toUpperCase();
// }
// console.log(str3);

function showMessage() {
  console.log("Hello world!!!");
}

showMessage();
showMessage();

function calcSum(firstArg = 15, secondArg = 25) {
  if (!firstArg) firstArg = 10;
  {
    if (!secondArg) secondArg = 20;
  }
  console.log("First Argument:", firstArg);
  console.log("Second Argument:", secondArg);
  let result = firstArg + secondArg;
  console.log(result);
}

calcSum();
calcSum(2, 3);

function checkNumber(arg) {
  if (!isNaN(arg)) {
    showNumberMessage();
  } else {
    showStringMessage();
  }
}

function showNumberMessage() {
  console.log("This is Number");
}
function showStringMessage() {
  console.log("This is String");
}
checkNumber(29);
checkNumber("Hello");

function multiply(a, b) {
  let result = a * b;
  console.log(result);
}

let num = multiply(3, 5);
console.log(num);

function checkMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
let max = checkMax(checkMax(3, 5), checkMax(6, 9));
console.log(max);
