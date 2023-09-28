/*
## Example 9 - Sort method

Let the `sortByModel` function return a new array of cars sorted
by model name in alphabetical and reverse alphabetical order, depending on
the value of the `order` parameter.
*/
import { cars } from "./carsData.js";

const sortByModel = (cars, order) => {
    const ascSort = (a, b) => {
        if (a.model < b.model) {
            return -1;
        }
        if (a.model > b.model) {
            return 1
        }

        return 0;
    }

    const descSort = (a, b) => {
        if (b.model < a.model) {
            return -1;
        }
        if (b.model > a.model) {
            return 1
        }

        return 0;
    }

    return cars.sort((a, b) => {
        if (order === 'asc') {
            return ascSort(a, b);
        } else {
            return descSort(a, b);
        }
    })
};

console.table(sortByModel(cars, "asc"));
console.table(sortByModel(cars, "desc"));
