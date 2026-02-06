//                First

const num = 20;

for (let i = 1; i <= num; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}

//                Second

let factorial = +prompt('Введите факториал числа: ', 1);
let result = 1;

for (let i = 1; i <= factorial; i++) {
  result = result * i;
}

console.log(`${factorial}! = ${result}`);

//                Three

for (let row = 0; row < 8; row++) {
  let line = "";

  for (let col = 0; col < 8; col++) {
    line += (row + col) % 2 == 0 ? "⬛ " : "⬜ ";
  }

  console.log(line);
}
