// const outputScrollStandard = document.getElementById('outputScrollStandard');
// const outputScrollThrottling = document.getElementById('outputScrollThrottling');

// const eventScrollCounter = {
//     standard: 0,
//     throttled: 0
// }

// const functionStandard = () => {
//     eventScrollCounter.standard += 1;
//     outputScrollStandard.textContent = eventScrollCounter.standard;
// }

// const seconds = 10;

// document.addEventListener('keydown', functionStandard);

// document.addEventListener('keydown', _.throttle( () => {
//     eventScrollCounter.throttled += 1;
//     outputScrollThrottling.textContent = eventScrollCounter.throttled;
// }, seconds * 1000))

// ------------------------------------------------------------------------------

// const outputResizeStandard = document.getElementById('outputResizeStandard');
// const outputResizeThrottling = document.getElementById('outputResizeThrottling');
// const outputResizeDebounce = document.getElementById('outputResizeDebounce');

// const eventResizeCounter = {
//     standard: 0,
//     throttled: 0,
//     debounced: 0
// }

// window.addEventListener('resize', () => {
//     eventResizeCounter.standard += 1;
//     outputResizeStandard.textContent = eventResizeCounter.standard;
// })

// window.addEventListener('resize', _.throttle(() => {
//     eventResizeCounter.throttled += 1;
//     outputResizeThrottling.textContent = eventResizeCounter.throttled;
// }, 1500));

// window.addEventListener('resize', _.debounce(() => {
//     eventResizeCounter.debounced += 1;
//     outputResizeDebounce.textContent = eventResizeCounter.debounced;
// }, 1500));

// ------------------------------------------------------------------------------

const CORRECT_INPUT_LENGTH = {
    min: 5,
    max: 15
}

const CLASS_NAMES = {
    wrong: 'wrong',
    correct: 'correct'
}

const signInForm = document.querySelector('#signInForm');

const handleInputValidation = ({ target }) => {
    console.dir(target);
    const isValid =
        target.value.length > CORRECT_INPUT_LENGTH.min &&
        target.value.length < CORRECT_INPUT_LENGTH.max;

    console.log(`E valid ${target.value} ${isValid}`);

    if (isValid) {
        target.classList.add(CLASS_NAMES.correct);
        target.classList.remove(CLASS_NAMES.wrong);
    } else {
        target.classList.add(CLASS_NAMES.wrong);
        target.classList.remove(CLASS_NAMES.correct);
    }
}

const debounceMs = 800;

signInForm.addEventListener('input', _.debounce(handleInputValidation, debounceMs));
// signInForm.addEventListener('input', handleInputValidation);
