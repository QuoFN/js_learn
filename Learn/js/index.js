"use strict";

const todos = [];

const todoKeys = {
  id: "id",
  text: "text",
  isCompleted: "isCompleted",
};

const getNewTodoId = todos => {
  return (
    todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1
  );
};

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.isCompleted]: false,
  };

  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);
  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todo[todoKeys.isCompleted] = !todo[todoKeys.isCompleted];
  return todo;
};

const deleteTodoById = (todos, id) => {
  const index = todos.findIndex(todo => todo[todoKeys.id] === id);

  if (index === -1) {
    console.error(errTodoNotFound(id));
    return todos;
  }

  todos.splice(index, 1);
  return todos;
};

const changeTodoText = (todos, id, text) => {
  const todo = todos.find(todo => todo[todoKeys.id] === id);

  if (!todo) {
    console.error(`Todo with id ${id} not found`);
    return null;
  }

  todo[todoKeys.text] = text;
  return todo;
};

// ----------------------------------------------------------------------------

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosList = document.querySelector(".todos");

function createTodoElement(text) {
  const list = document.createElement("li");
  list.classList.add("todo");
  list.innerHTML(`div class="todo-text">${text}</div>
  <div class="todo-actions">
    <button class="button-complete button">&#10004;</button>
    <button class="button-delete button">&#10006;</button>
  </div>`);
  return list;
}

function handleCreateTodo(todos, text) {
  const button = document.querySelector('.button-create');

  button.addEventListener('click', () => {
    todos = createTodo();
    text = createTodoElement();
  })
}

handleCreateTodo(todos, inner.value);







// При помощи метода querySelector получаем элементы .form, .input и .todos

// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки

// Создаем функцию handleCreateTodo(todos, text),
//  которая будет вызывать createTodo и createTodoElement
