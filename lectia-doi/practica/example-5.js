/*
Example 5 - Link Formatting (endsWith)

Write a script that checks if the value of the link variable ends symbol /. if not,
add this character to the end of the link value. Use if...else construction.
*/

let link = 'https://my-site.com/about';

const lastCharacter = link.charAt(link.length - 1);

if (lastCharacter !== '/') {
    // link = link + '/';
    link += '/';
}

console.log(link);