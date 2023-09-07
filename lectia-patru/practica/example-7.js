/*## Example 7 - Average value

Write a `calAverage()` function that takes an arbitrary number of arguments
and returns their average. All arguments will be only numbers.
*/

function calAverage() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }

    const average = total / arguments.length;

    return total / arguments.length;

    // return average;
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
