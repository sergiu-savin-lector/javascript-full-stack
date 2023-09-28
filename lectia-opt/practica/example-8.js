/** 
## Example 8 - Sort method

Let the `sortByDescendingPrice` function return a new array of cars
sorted in descending order by the value of the `price` property.
*/

import { cars } from "./carsData.js";


const sortByDescendingPrice = (cars) => {
    // const newCarList = [...cars];
    // const newCarList = cars.map( car => car);
    
    return [...cars].sort( (a, b) => b.price - a.price);
};

console.table(sortByDescendingPrice(cars));

console.log(cars);