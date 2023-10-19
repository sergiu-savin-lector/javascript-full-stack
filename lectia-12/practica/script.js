/**
 * Toggle Button
 */

const toggleButton = document.querySelector('.toggle-button');
const icon = document.querySelector('.icon');

// toggleButton.addEventListener('click', () => {
//   icon.classList.toggle('icon-red')
// })

// setTimeout(() => {
//   toggleButton.removeEventListener('click',) // nu functioneaza pt ca trebuie specificata referinta functiei
// }, 5000);

const handleClick = () => {
  icon.classList.toggle('icon-red')
}

toggleButton.addEventListener('click', handleClick);

setTimeout(() => toggleButton.removeEventListener('click', handleClick), 5000);

/**
 * Submit FORM
 */

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);

  const username = document.getElementById('username');
  const password = document.getElementById('password');

  if (username.value === '' || password.value === '') {
    alert('Te rugam sa introducei o valoare in ambele campuri');
  } else {
    // fa o actiune cu informatia din inputuri
    alert('Formularul a fost salvat cu suuces');
    console.log(`This form has a username of ${username.value} and the password: ${password.value}`);
  }

  username.value = '';
  password.value = '';
})

const username = document.getElementById('username');
const password = document.getElementById('password');

setTimeout(() => {
  username.value = 'sergiu';
}, 5000)

const registerForm = document.querySelector('#registerForm');
const registerFormErrors = document.getElementsByClassName('form-errors')[1];

const markFormWithError = (message) => {
  if (!registerForm.classList.contains('error')) {
    registerForm.classList.add('error')
  }
  registerFormErrors.textContent = message;
}

const handleSuccess = () => {
  registerForm.classList.remove('error');
  registerFormErrors.textContent = '';
  console.log(`Logged in suscessful!`);
}

registerForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e);

  const { elements } = e.target;
  const username = elements['username-register'].value;
  const password = elements['password-register'].value;

  // if (!username || !password) {
  //   markFormWithError('Usernameul sau parola nu sunt definite');
  // } else if(username.length > 15) {
  //   markFormWithError('Usernameul nu poate avea mai mult de 15 caractere');
  // } else if(password.length < 8) {
  //   markFormWithError('Parola nu poate avea sub 8 caractere');
  // } else {
  //   handleSuccess();
  // }

  if (!username || !password) {
    markFormWithError('Usernameul sau parola nu sunt definite');
    return;
  }

  if (username.length > 15) {
    markFormWithError('Usernameul nu poate avea mai mult de 15 caractere');
    return;
  }

  if (password.length < 8) {
    markFormWithError('Parola nu poate avea sub 8 caractere');
    return;
  }

  handleSuccess();
})

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (e) => {
  console.log(e);
  nameOutput.innerHTML = e.target.value;
})

nameInput.addEventListener('focus', () => {
  console.log('Focus')
})

nameInput.addEventListener('blur', () => {
  console.log('blur')
})

nameOutput.addEventListener('click', () => {
  nameInput.focus()
  setTimeout(() => {
    nameInput.blur();
  }, 2000)
})
