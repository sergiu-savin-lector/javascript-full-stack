/*## Example 6 - Arrays and Strings

Write a script that "unwraps" a string (reverse letter order) and prints
it to the console.*/

const string = 'Welcome to the future';

const words = string.split(' ');

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
}

console.log(words);

const finalString = words.join(' ');
console.log(finalString);