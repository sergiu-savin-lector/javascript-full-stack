/*
## Example 8 - Search for an element

Write a script to find the smallest number in an array. The code should work
for any array of numbers. Use a loop to solve problems.
*/

const numbers = [2, 17, 94, 1, 0, 5, 23, 37];

let min = numbers[0];

for (i = 0; i < numbers.length; i++) {
    console.log(`${min} > ${numbers[i]}`);
    if (min > numbers[i]) {
        min = numbers[i];
    }
    console.log(min);
}

console.log('-----Final---');
console.log(min);