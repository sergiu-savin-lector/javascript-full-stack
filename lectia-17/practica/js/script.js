// console.log('1');

// setTimeout(() => console.log('2'), 0)

// setTimeout(() => console.log('3'), 1000);

// console.log('4');

// setTimeout(() => console.log(5), 200);

// -------------------------------------------

// for (let i = 3; i > 0; i--) {
//   const delay = i * 1000;
//   setTimeout( () => console.log(i), delay)
// }

// --------------------------------------

// setTimeout(() => console.log('2'), 2000)
// setTimeout(() => console.log('1'), 2000)

// -------------------------------------------

// setTimeout(() => console.log(0), 0)
// setTimeout(() => console.log(1), 1000)
// setTimeout(() => console.log(2), 2000)

// -------------------------------------------


// const myNUmber = 5;

// function addToNumber() {
//   return myNUmber + 5;
// }

// setTimeout(() => console.log('Timeout'), 0);

// console.log(addToNumber());


// Write a New Year's countdown timer that can be stopped by clicking the **Stop** button
// Styles and markup can be taken here - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown

/*
New Year - January 1 00:00 2024
Today's date is January 25, 20:20 2023

we will use setInterval() to run the counter

1. subtract the current date from the New Year - this way we will get the time difference (we will work with milliseconds)
2. from the milliseconds obtained in step 1, we will extract the number of days, hours, minutes and seconds remaining until the New Year
3. show this data to the user on the page
*/

const timeEl = document.getElementById('time');
const stopBtnEl = document.getElementById('stopBtn');
const continueBtnEl = document.getElementById('continueBtn');

const newYearDate = new Date(`January 1, ${new Date().getFullYear() + 1}`);

console.log(newYearDate);
console.log(new Date().getFullYear())

let intervalId = setInterval(calculateTimeLeftToNY, 1000);
let isTimerRunning = true;

stopBtnEl.addEventListener('click', () => {
  stopInterval();
  if (!isTimerRunning) {
    continueBtnEl.disabled = false;
    continueBtnEl.addEventListener('click', continueInterval);
  }
});

function calculateTimeLeftToNY() {
  const now = Date.now();
  // console.log(now);
  const nextYear = new Date().getFullYear() + 1;
  const newYearDate = new Date(`January 1, ${nextYear}`);

  const diff = newYearDate - now;
  // console.log(diff);

  if (diff < 0) {
    stopInterval();
    console.error('Data este in trecut');
    timeEl.textContent = 'Un an nou fericit!';
    return;
  }

  const {days, hours, minutes, seconds} = formatDateTime(diff);
  timeEl.textContent = `${days} d. ${hours} h. ${minutes} m. ${seconds} s.`;
}

function formatDateTime(diff) {
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60 )) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {days, hours, minutes, seconds};
}

function stopInterval() {
  isTimerRunning = false;
  clearInterval(intervalId);
}

function continueInterval() {
  isTimerRunning = true;
  console.log(isTimerRunning);
  continueBtnEl.disabled = true;
  intervalId = setInterval(calculateTimeLeftToNY, 1000);
}


setTimeout(() => console.log('Timeout'), 0);