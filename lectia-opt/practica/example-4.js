/*
Example 4 Filter method

Let the `getCarsWithDiscount` function return an array of cars whose
onSale property is true.
*/
import { cars } from "./carsData.js";

const getCarsWithDiscount = (cars) => {
    return cars.filter( car => car.onSale); // car.onSale === true, !car.onsale => car.onSale === false 
};

console.table(getCarsWithDiscount(cars));
