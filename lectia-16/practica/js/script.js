// console.log('before try catch')

// const data = '{"name": "John", "age": "30", "car": null,}';

// try {
//   console.log(JSON.parse(data));
// } catch (error) {
//   console.error(error)
// }

// for (let i = 0; i < 10; i++) {
//   try {
//     console.log('inainte de ' + i);
//     if(i === 5) throw new Error('i is 5');
//     console.log('dupa ' + i);
//   } catch(error) {
//     console.error(error)
//   }
// }

// console.log('Restul codul meu');

// -----------------------------------------------------------------------

// import {save, load} from './storage.js';

// const formData = {
//   email: 'test@gmail.com',
//   message: 'Salut'
// }

// save('test', formData);

// ----------------------------------------------------------------------

/*
Write a Todo-list where you can create, delete items and save the list in local storage
Styles and markup can be taken from here - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
*/

/*
- without local storage
    1. write the logic of adding a task by pressing the add button
        1.1. read the value from the input field
        1.2. we check for an empty term, if it is empty, we inform the user about it and do not add a task
        1.3. if there is a task, then we create a list item to which we add the text of the task
        1.4. add a cross to the list item
        1.5. clear the input field
    2. write the logic of the task state (completed or not)
        2.1. by clicking on the excess - toddle class check
    3. write the logic for removing a task from the list
        3.1. if we clicked on the cross - we delete the excess from the page

- with local storage
    1. we will store tasks in the form of an array of objects
        1.1. object with fields: text, isDone, ID. The ID is required to search for items, to delete items, and to update the status of items. 
        The identifier must be both in the element and in the object in the repository.
    2. when we add li to the page, we will add it to storage
    3. write the logic of the function that will retrieve data from storage and add them to the page in the form of extras
    4. write the logic for removing the task from the page and for updating the status of the task.
*/

import { save, load } from './storage.js';

const addBtn = document.getElementById('addBtn');
const myUL = document.getElementById('myUL');
const input = document.getElementById('myInput');

const TASK_KEY = 'tasks';

let currentId = 0;

addBtn.addEventListener('click', addNewTask);
myUL.addEventListener('click', handleTaskBehaviour);
window.addEventListener('DOMContentLoaded', fillTasksList)

function addNewTask() {
  const value = input.value;

  if (!value) {
    alert('Trebuie sa adaugi un text pt task');
    console.error('Trebuie sa adaugi un text pt task');
    return;
  }

  createLi(value);
  addTaskToStorage(value);
  input.value = '';
}

function createLi(text, isDone = false, id = currentId) {
  const liEL = document.createElement('LI');
  const liText = document.createTextNode(text);
  liEL.appendChild(liText);
  liEL.dataset.id = id;
  myUL.appendChild(liEL);
  addCloseButton(liEL);
}

function addCloseButton(li) {
  const span = document.createElement('SPAN');
  const text = document.createTextNode("\u00D7");
  span.className = 'close';
  span.appendChild(text);
  li.appendChild(span);
}

const createTaskObject = (text, isDone) => ({ text, isDone, id: currentId });

function addTaskToStorage(text, isDone = false) {
  let currentState = load(TASK_KEY);
  const newTask = createTaskObject(text, isDone);
  if (currentState === undefined) {
    save(TASK_KEY, [newTask])
  } else {
    currentState.push(newTask);
    save(TASK_KEY, currentState);
  }
  currentId += 1;
}

function fillTasksList() {
  const currentState = load(TASK_KEY);
  if (currentState !== undefined) {
    currentState.forEach(({ text, isDone, id }) => createLi(text, isDone, id));
    currentId = currentState[currentState.length - 1].id + 1;
  }
}

function handleTaskBehaviour({ target }) {
  const currentState = load(TASK_KEY);

  if (target.tagName === "LI") {
    target.classList.toggle("checked");
    const taskIndex = currentState.findIndex(
      (taskObj) => +taskObj.id === +target.dataset.id
    );
    currentState[taskIndex].isDone = !currentState[taskIndex].isDone;
  } else if (target.classList.contains("close")) {
    target.parentNode.remove();
    const taskIndex = currentState.findIndex(
      (taskObj) => +taskObj.id === +target.parentNode.dataset.id
    );
    currentState.splice(taskIndex, 1);
  }
  save(TASK_KEY, currentState);
}


