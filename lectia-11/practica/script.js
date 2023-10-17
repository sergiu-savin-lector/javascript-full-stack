/*
# Task 1

const technologies = ["Javascript", "Python", "CSS", "HTML"];

1. Get container element
2. Create a cycle for sorting array elements
3. Create a li tag
4. Write the text from the array inside the list items
5. Place li inside ul
6. Place ul tag with items on the page
*/

const technologies = ["Javascript", "Python", "CSS", "HTML"];
const containerEl = document.querySelector('#container');
// console.dir(containerEl);
const listEl = document.createElement('ul'); // <ul></ul>
console.dir(listEl);
containerEl.append(listEl);

// const firstElFromList = document.createElement('li');
// firstElFromList.innerText = technologies[0];
// listEl.append(firstElFromList);

// for (let i = 1; i < technologies.length; i++) {
//   const li = document.createElement('li'); // <li></li>
//   li.innerText = technologies[i]; // <li>Python</li>
//   listEl.append(li);
// }

technologies.forEach( (technology) => {
  const li = document.createElement('li');
  li.innerText = technology;
  listEl.prepend(li);
})

// technologies.forEach( (technology) => {
//   const li = document.createElement('li');
//   li.innerText = technology;
//   listEl.append(li);
// })


/*
# Task 2

Starting from this colors array, create buttons dynamically;

1. Iterate trough the array;
2. Create a button and set color for the button; (style.backgroundColor, classList.add(""))
3. Set the text of the button
4. Add the button to the UI
*/

const colors = [
  {
    label: "Primary Button",
    color: "#ff0000",
    isPrimary: true
  },
  {
    label: "Click Me",
    color: "#00ff00",
    isPrimary: true
  },
  {
    label: "Yellow",
    color: "#fff00f",
    isPrimary: false
  },
];

colors.forEach( color => {
  const buttonEl = document.createElement('button'); // <button></button>
  containerEl.append(buttonEl);
  buttonEl.textContent = color.label;

  if (color.isPrimary) {
    buttonEl.innerHTML = `<span><a href='https://www.google.com/'>${color.label}</a></span>`;
    buttonEl.classList.add('primary-button');
  } else {
    buttonEl.style.backgroundColor = color.color;
    console.dir(buttonEl);
  }
})



/**
 * Test Example
 */

const testQuerySelector = document.querySelector('#testId');
const testQuerySelectorAll = document.querySelectorAll('#testId');
const testElementById = document.getElementById('testId');
const testElementByClass = document.getElementsByClassName('testClass');
const testElementByTag = document.getElementsByTagName('div');

// console.dir(testQuerySelector);
// console.dir(testQuerySelectorAll[0]);
// console.dir(testElementById);
// console.dir(testElementByClass[0]);
// console.dir(testElementByTag);


