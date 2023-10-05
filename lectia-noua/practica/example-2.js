/*
## Example 2 - Phone book

Make methods' refactoring of the `phonebook` object to make the code work.
*/

const phonebook = {
  contacts: [],
  add(contact) {
    const newContact = {
      list: "default",
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
  },
  generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
  get() {
    return this.contacts;
  }
};


phonebook.add({
  name: "Mango",
  email: "mango@mail.com",
  list: "friends",
});

phonebook.add({
  name: "Poly",
  email: "poly@hotmail.com",
});

console.log(phonebook.get());
