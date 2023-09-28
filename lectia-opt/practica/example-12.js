import { cars } from "./carsData.js";

/*
## Example 12 - Method chains

Let the `getSortedCarsOnSale` function return an array of cars for sale
(onSale property), sorted by price ascending.

*/

const getSortedCarsOnSale = (cars) => {
    const tempCars = [...cars];
    return tempCars
        .filter(car => car.onSale)
        .map(car => {
            return {
                name: `${car.make} - ${car.model}`,
                price: car.price
            };
        })
        .sort((a, b) => a.price - b.price);
};

console.table(getSortedCarsOnSale(cars));
