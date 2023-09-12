/*
## Example 2 - Object.values() method

We have an object that stores our team salaries. Write code for
summing all salaries and store the result in the sum variable. Should
get 390. If the `salaries` object is empty, then the result should be 0.

### Code
*/

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sumA = 0;

const salariesList = Object.values(salaries);

console.log(salariesList);

for (let i = 0; i < salariesList.length; i++) {
  sumA += salariesList[i];
}

console.log(sumA);

// let sumB = 0;
// for (const key in salaries) {
//   sumB += salaries[key];
// }

// console.log(sumB);