/* Example 6 - Link formatting (includes and logical "AND")

Write a script that checks if the value of the link variable ends by symbol /.
If not, append this character to the end of the link value, but only if link
contains the substring "my-site". Use construction if...else.
*/

let link = 'https://my-site.com/about';

const lastCharacter = link.charAt(link.length - 1);

// if (lastCharacter !== '/' && link.includes('my-site')) {
//     // link = link + '/';
//     link += '/';
// }

const isLastCharSlash = lastCharacter !== '/' && link.includes('my-site');
link += isLastCharSlash ? '/' : '';

console.log(link);
