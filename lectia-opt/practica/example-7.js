import { cars } from "./carsData.js";
/** 
## Example 7 - Sort method

Let the `sortByAscendingAmount` function return a new array of cars
sorted in ascending order by the value of the `amount` property.
*/


const sortByAscendingAmount = (cars) => {
    return cars.sort((a, b) => a.amount - b.amount);
};

console.table(sortByAscendingAmount(cars));


// const newArr = [1, 2, 34, 250, 10003, 23];

// console.log(newArr.sort((a, b) => b - a ))
