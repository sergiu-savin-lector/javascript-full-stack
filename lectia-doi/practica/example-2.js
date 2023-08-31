/*
Example 2 - Time display (if...else)

Write a script to display hours and minutes in the browser console as
a string format "14 ore 26 minute.". 

If the value of the minutes variable
is 0, then output the string "14 fix", without minutes.
*/

const hours = 14;
const minutes = 35;
let timestring;

if (minutes > 0) {
    timestring = `${hours} ore ${minutes} minute`;
} else {
    timestring = `${hours} fix`;
}

console.log(timestring);