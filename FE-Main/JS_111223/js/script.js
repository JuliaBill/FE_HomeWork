// let image = document.querySelector(".gallery__image"),
//   isToggle = true;
// // let isToggle = false;

function zoom() {
  if (isToggle) {
    image.style.width = "300px";
    image.style.height = "300px";

    // isToggle = false;
  } else {
    image.style.width = "200px";
    image.style.height = "200px";

    // isToggle = true;
  }

  isToggle = !isToggle;
}

let image = document.querySelector(".gallery > img");
let count = 1;

function next() {
  count++;
  //   console.log("next", count);
  //   image.src = `./img/img${count}.jpg`;

  if (count > 5) {
    count = 1;
  }
  image.src = `./img/img${count}.jpg`; //
}

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;  // so kann man das auch aufschreiben, macht man aber nicht
// for (; i <= 10; ) {
//   console.log(i);
//   i++;
// }

// let counter = 0;

// for (let i = 0; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     // console.log(i);
//     counter++;
//   }
// }
// console.log(counter);

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     document.write("*&nbsp;&nbsp;");
//   }

//   document.write("</br>");
// }

// let i = 0;
// while (i < 6) {
//   console.log(i);
// i++;
// }

// let i = 6;
// do {
//   console.log(i);
//   i++;
// } while (i < 6);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// loop1:
// for (let i = 0; i < 3; i++) {
//   loop2:
//   for (let j = 0; j < 3; j++) {
//     loop3:
//     for (let k = 0; k < 3; k++) {
//       if (i === 1  && j ==== 1) {
//         break loop1;
//       }
//       console.log(i,j,k);
//     }
//   }
// }
