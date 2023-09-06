/*
## Example 4 -Arrays and Loops

Write a script that prints the user's name and phone number to the console.

The `names` and `phones` variables store strings of names and phone numbers,
separated by commas. The sequence number of names and phone numbers in the lines indicates a match.
 The number of names and phone numbers is guaranteed to be the same.
*/

const names = 'Sergiu,Alex,Andrei,Raluca';
const phones = '0727272727,0728282828,0729292929,0730303030';

const arrayOfNames = names.split(',');
const arrayOfPhones = phones.split(',');

console.log(arrayOfNames);
console.log(arrayOfPhones);

for (let i = 0; i < arrayOfNames.length; i++) {
    console.log(`${arrayOfNames[i]} - ${arrayOfPhones[i]}`);
}