/*
## Example 2 - Arrays and Strings

Write a script to calculate the area of a rectangle with sides, which
values are stored in the `values` variable as a string. Values guaranteed
separated by a space.
*/

const values = '8 11';
const rectangleSizes = values.split(' ');
console.log(rectangleSizes);

const height = Number.parseInt(rectangleSizes[0]);
const width = Number.parseInt(rectangleSizes[1]);

const aria = height * width;
console.log(aria);

console.log(rectangleSizes[0] * rectangleSizes[1]);