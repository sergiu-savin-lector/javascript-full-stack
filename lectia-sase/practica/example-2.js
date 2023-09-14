/* ## Example 2 - Destructuring

Rewrite the function so that it takes one object of the parameter instead of a set
of independent arguments.

```js

*/

function printContactsInfo(arg) {
  const { names: listOfNames, phones: listOfPhones } =arg;

  const nameList = listOfNames.split(",");
  const phoneList = listOfPhones.split(",");
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

// It was
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Is expected
printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});

