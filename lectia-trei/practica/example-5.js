/*
## Example 5 - Arrays and Strings

Write a script that prints to the console all the words of a string except the first and
the last one. The resulting string must not start or end
whitespace character. The script should work for any line.

```js
```
*/

const string = '    Welcome to the future';
console.log(string);

const words = string.split(' ');
console.log(words);

if (words.length > 1) {
    words.shift();
} 
 
for (let i = 0; i < words.length; i++) {
    if (words[i] === ' ') {
        words.shift()
    } else {
        break;
    }
}

console.log(words);

if (words.length > 1) {
    words.pop();
}
console.log(words);

let finalString = '';
for (const word of words) {
    if (word !== '') {
        finalString += word + ' ';
    }
}

console.log(finalString);