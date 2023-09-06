/*
1. Create an array `genres` with elements "Jazz" and "Blues".
2. Add "Rock and Roll" to the end.
3. Print the first element of the array to the console.
4. Print the last element of the array to the console. The code should work for an array
   random length.
5. Remove the first element and print it to the console.
6. Insert "Country" and "Reggae" at the beginning of the array.
*/

const genres = ["Jazz", "Blues"];

genres.push("Rock and Roll");

console.log(genres);

console.log(genres[0]);

console.log(genres[genres.length - 1]);

console.log(genres.shift());
console.log(genres);
genres.unshift("Country", "Reggae");
console.log(genres);
