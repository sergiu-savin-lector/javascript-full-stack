/*
## Example 3 - User

Write a class `User` which creates an object with properties `login` and `email`.

Declare private properties `#login` and `#email`, which can be accessed via
getter and setter of `login` and `email`.
*/

class User {
  #login;
  #email;
  constructor({login, email}) {
    this.#login = login;
    this.#email = email;
  }

  get(prop) {
    if(prop === 'login') {
      return this.#login;
    }

    if(prop === 'email') {
      return this.#email;
    }
  }

  setLogin(newLogin) {
    this.#login = newLogin;
  }
}

const mango = new User({
  login: "Mango",
  email: "mango@dog.woof",
});

console.log(mango.get('login'));
mango.setLogin('Sergiu');
console.log(mango.get('login'));
console.log(mango.get('email'));
mango.login = 'test';


