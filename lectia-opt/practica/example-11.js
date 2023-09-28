/*
## Example 11 - Method chains

Let the `getAvailableCarNames` function return an array of car models, but
only those that are currently for sale.
*/
import { cars } from "./carsData.js";

const getModelsOnSale = (cars) => {
    return cars
        .filter(car => car.onSale)
        .map(car => {
            return {
                name: `${car.make} - ${car.model}`
            };
        });
};

console.table(getModelsOnSale(cars));
