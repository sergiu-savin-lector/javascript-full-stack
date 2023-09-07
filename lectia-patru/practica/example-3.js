/*

## Example 3 - Area of a rectangle

Write a function `getRectArea(dimensions)` to calculate the area of a rectangle
with sides, the values of which will be passed to the `dimensions` parameter as a string.
Values are guaranteed to be separated by a space.

*/

function getRectArea(dimensions) {
    const values = dimensions.split(' ');
    const dimensionA = Number(values[0]);
    const dimensionB = Number(values[1]);
    // return 'Fac ce vreau eu';
    return dimensionA * dimensionB; 
}

console.log(getRectArea("8 11"));
