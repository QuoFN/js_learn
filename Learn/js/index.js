
// ---------------------------------------------------------------------------------------------------------------

            //   First

// const number = prompt('Введите число');
// const fixNumber = 2;

// if (number % fixNumber) {
//     alert('Число не четное');
// } else {
//     alert('Число четное');
// }

// ------------------------------------

//              Second

// const age = prompt('Введите ваш возраст');
// const discount = age < 18 ? 10 : age <= 65 ? 20 : 30;
// console.log(`Скидка ${discount}%`);

// const age = prompt('Введите ваш возраст');

// let discount = 0;

// switch (true) {
//     case age < 18:
//         discount = 10;
//         break
//     case age <= 65 && age >= 18:
//         discount = 20
//         break
//     default:
//         discount = 30
// }

// console.log(`Скидка ${discount}%`);

// ------------------------------------------------

//               Three

// const userName = prompt("Укажите ваше имя");
// const password = prompt("Введите пароль");

// switch (true) {
//   case (userName === "admin" || userName === 'user') && password === "123456":
//     alert("Доступ разрешен");
//     break;
//   default:
//     alert("Доступ ограничен!");
// }

//             // Four

// const weight = prompt("Напишите вес посылки(в киллограмах)");
// const deliveryType = prompt(
//   "Выберите тип доставки / Стандарт / Экспресс / Премиум"
// );

// if (weight <= 0) {
//   alert("Некорректный вес посылки");
// } else if (
//   deliveryType != "Стандарт" &&
//   deliveryType != "Экспресс" &&
//   deliveryType != "Премиум"
// ) {
//   alert("Неверный тип доставки");
// }

// const price = weight < 1 ? 5 : weight <= 5 ? 10 : 15;

// let coefficient = 0;

// switch (true) {
//   case deliveryType === "Стандарт":
//     coefficient = 1;
//     break;
//   case deliveryType === "Экспресс":
//     coefficient = 1.5;
//     break;
//   case deliveryType === "Премиум":
//     coefficient = 2;
//     break;
// }

// const result = price * coefficient;

// if (result > 0) {
//     alert(`Итоговая стоимость доставки: ${result}$`);
// }



