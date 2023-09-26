/** 
## Example 7 - forEach method

Make the code refactoring using `forEach` method and arrow functions.

```js
*/

const logItems = items => {

  console.log(items);

  items.forEach((item, index) => {
    console.log(`${index + 1} - ${item}`);
  });
}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);


