// Create a product cost calculator depending on the price. When working with events, use delegation. Render all markup via JS
// When the data variable is entered in input #1 or #2, the total cost should be automatically recalculated
// The currency - USD should always be displayed
// The total amount is displayed with pennies (2 decimal places)
// In the signature of the second input, there should be a color hint of how many pounds the user selected on the second input.
// The color tooltip should change its value when the slider is dragged.
// In input No. 2, set min and max threshold by yourself.
// When loading the page, the script should automatically calculate the cost based on the default data that you set in the markup.



// Section Exercise 

const sectionEl = document.querySelector('.section-exercise');
const divEl = document.querySelector('.section-exercise div');
const paragraphEl = document.querySelector('.section-exercise p');

document.addEventListener('click', () => {
  console.log('Click pe document');
})

sectionEl.addEventListener('click', (e) => {
  debugger;
  e.stopPropagation();
  console.log('Ai apasat pe sectiune');
})

divEl.addEventListener('click', (e)=> {
  console.log('Ai apasat pe div.')
})

