import { cars } from "./carsData.js";

/** 
## Example 10 - Reduce method

Let the `getTotalAmount` function return the total number of cars (the value
of the `amount` properties).
*/


const getTotalAmount = (cars) => {
    return cars.reduce( (total, car) => {
        return total + car.amount;
    }, 0)
};

console.log(getTotalAmount(cars));
