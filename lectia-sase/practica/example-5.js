/*
## Example 5 - operation Spread

Extend the `createContact(partialContact)` function so that it returns a new
contact object with `id` and `createdAt` properties added, as well as `list` with
value "default" if there is no such property in `partialContact`.

```js
*/

function generateId() {
  return Math.random() + 'Random';
}

// Solution
function createContact(partialContact) {
  return {
    id: generateId(),
    list: "default",
    id: generateId(),
    createdAt: Date.now(),
    ...partialContact,
    test: 'Test initial',
    test: 'Test final'
  };
}

console.log(
  createContact({
    name: "Mango",
    email: "mango@mail.com",
    list: "friends",
  })
);
console.log(
  createContact({
    name: "Poly",
    email: "poly@hotmail.com",
  })
);





