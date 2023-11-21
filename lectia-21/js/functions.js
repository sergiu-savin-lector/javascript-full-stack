import { saveTask, loadTasks, updateTask, deleteTask } from "./api.js";

const myInput = document.getElementById('myInput');
const myUL = document.getElementById('myUL');
let currentId = 1;

function addNewTask() {
  const inputValue = myInput.value.trim();

  if (inputValue === '') {
    alert('You must write something!')
    return;
  }
  createLI(inputValue);
  myInput.value = '';
  addTaskToDB(inputValue)
}

function createLI(text, isDone = false, id = currentId) {
  const liEL = document.createElement('LI');
  const liText = document.createTextNode(text);
  liEL.appendChild(liText);
  liEL.dataset.id = id;
  if (isDone) {
    liEL.className = 'checked';
  }
  myUL.appendChild(liEL);
  addCloseButton(liEL);
}

function addCloseButton(li) {
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
}

function handleTaskBehaviour({ target }) {
  if (target.tagName === 'LI') {
    target.classList.toggle('checked');
    updateTask(target.dataset.id, target.classList.contains('checked'));
  } else if (target.classList.contains('close')) {
    target.parentNode.remove();
    deleteTask(target.parentNode.dataset.id);
  }
}

function addTaskToDB(text, isDone = false) {
  const newTask = {text, isDone};
  // const newTask = {text: text, isDone: isDone};
  saveTask(newTask);
  currentId += 1;
}

function fillTasksList() {
  loadTasks().then( todos => {
    todos.forEach( ({text, isDone, id}) => createLI(text, isDone, id));
    console.log(todos);
    return todos;
  })
  .then( todos => {
    currentId = todos.length === 0 ? 1 : Number(todos[todos.length - 1].id) + 1;
  });
}

export { addNewTask, handleTaskBehaviour, fillTasksList };