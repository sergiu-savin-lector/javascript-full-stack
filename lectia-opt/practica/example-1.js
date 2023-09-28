/*
## Example 1 - Map method

Let the `getModels` function return an array of models (model field) of all
cars.
*/

import { cars } from './carsData.js';

const getModels = (carList) => {

    if (carList.length === 0) {
        return console.error('There is no car in the list');
    }
     // daca avem un singur parametru, parantezele sunt optionale
    //  daca expresia este pe o singura linie, returnul este implicit

    // return carList.map( (item) => {item.model}); 
    return carList.map( (item) => {
        return item.model;
    }); 
 };

console.table(getModels(cars));
