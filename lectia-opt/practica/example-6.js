/** 
## Example 6 - The find method
*/

import { cars } from "./carsData.js";

const getCarByModel = (cars, model) => {
    return cars.find( car => car.model === model);
};

console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));
