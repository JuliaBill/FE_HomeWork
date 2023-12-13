// let array = [0, 10, 20, 30, 40, 50];

// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] + array[j] == 50)
//       console.log("i=" + array[i], "j=" + array[j]);
//   }
// }

// function sum(array, num) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] == num)
//         console.log("i=" + array[i], "j=" + array[j]);
//     }
//   }
// }

// let arr = [0, 10, 20, 30, 40, 50];
// sum(arr, 40);

// let array = [5, 4, 3, 2, 1];
// for (let i = 1; i < array.length - 1; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] > array[j] == i) {
//     }
//     console.log(i);
//   }
// }
// решаем задачу. Сортировка

// let array = [5, 4, 3, 2, 1];

// for (let i = 0; i < array.length - 1; i++) {
//   for (let j = 0; j < array.length - 1 - i; j++) {
//     if (array[j] > array[j + 1]) {
//       let temp = array[j];
//       array[j] = array[j + 1];
//       array[j + 1] = temp;
//     }
//   }
//   console.log(array);
// }
// let array = [5, 4, 3, 2, 1];
// let index = 0;
// while (index < array.length - 1) {
//   for (let j = array.length - 1; j >= 0; j--) {
//     if (array[j] > array[j + 1]) {
//       let temp = array[j];
//       array[j] = array[j + 1];
//       array[j + 1] = temp;
//     }
//   }
//   console.log(array);
//   index++;
// }

let array = [5, 4, 3, 2, 1];

for (let i = 0; i < array.length - 1; i++) {
  for (let j = array.length - 2; j >= i; j--) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}
console.log(array);
