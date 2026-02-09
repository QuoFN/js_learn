// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.


const person = {
  name: "Sava",
  age: 19,
  hobby: "volleyball"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}



// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым.
// Если объект пуст - верните true, в противном случае false.

const isEmpty = obj => {
  for (let key in obj) {
    return false;
  }
  return true;
};

console.log(isEmpty({}));
console.log(isEmpty({ name: "Sava" }));



// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая
// с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.


const task = {
  title: "Hello",
  description: "i am programmer",
  isCompleted: true,
};

const cloneAndModify = (object, modifications) => {
  return { ...object, ...modifications };
};

const modifications = {
  title: "How are you?",
  isCompleted: false,
};

const modifiedTask = cloneAndModify(task, modifications);

for (const key in modifiedTask) {
  console.log(`${key}: ${modifiedTask[key]}`);
}

console.log("Оригинал:", task);
console.log("Изменённая копия:", modifiedTask);



// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

const callAllMethods = obj => {
  for (const key in obj) {
    if (typeof obj[key] === "function") {
      obj[key]();
    }
  }
};

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

callAllMethods(myObject);
