/**
 * Strings
 */

const singleQuoteString = 'Single\' quote" string';
// singleQuoteString = 'Test'; // Error cannot assign to constant variable

console.log(singleQuoteString);

const doubleQuoteString = "Double\" quote' string";

console.log('doubleQuoteString');
console.log(doubleQuoteString);

const templateLiteralString = `Aici punem
scrie cod pe mai multe linii.
Putem chiar sa folosim vaiabile: ${doubleQuoteString}`;

console.log(templateLiteralString);