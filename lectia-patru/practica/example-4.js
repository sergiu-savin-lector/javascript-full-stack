/*
## Example 4 - Element logging

Write a function `logItems(items)` that takes an array and uses a `for` loop
that for each element of the array will print a message to the console
in the format `<item number> - <item value>`. The numbering
of elements should start with `1`.

For example, for the first element of the array `['Mango', 'Poly', 'Ajax']` with index `0`
will print `1 - Mango` and for index 2 will print `3 - Ajax`.
*/

function logItems(items) {
    for (let i = 0; i < items.length; i++) {
        const numberOfItem = i + 1;
        const value = items[i];
        // console.log(`${numberOfItem} - ${value}`);
        console.log(numberOfItem + ' - ' + value);
    }
}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
