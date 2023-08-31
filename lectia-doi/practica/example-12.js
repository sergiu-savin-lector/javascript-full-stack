/*Example 12 - User Input and Branching
Write a script that will ask for login using prompt and log result in browser console.

If the visitor enters "Admin", then prompt prompts for a password
If nothing is entered or the Esc key is pressed - print the line "Canceled"
Otherwise print the string "I don't know you"

Check password like this:

If the password is "I'm an admin", then output the string "Hello!"
Else output the string "Wrong password"*/

const loginAnswer = prompt('Care este username-ul?');

if (loginAnswer === 'Admin') {
    const passwordAnswer = prompt('Care e parola?');

    if (passwordAnswer === 'Sunt admin') {
        console.log('Hello');
    } else {
        console.log('Parola este gresita');
    }
} else if (loginAnswer && loginAnswer.length > 0) {
    console.log('I don\'t know you');
} else {
    console.log('Cancelled');
}
