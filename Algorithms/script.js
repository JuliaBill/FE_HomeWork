// for (let i = 0; i <= 5; i++) {
//   if (i % 2 == 0) console.log(i + " четное");
//   else console.log(i + " не четное");
// }

function maxElement(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}
let array = [1, 4, 6, 8, 9, 2, 7, 1, 0, -5, 4, 4, 6];
console.log(maxElement(array));

function minElement(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if ((array = [i] > min)) min = array[i];
  }
  return min;
}

console.log(minElement(array));
