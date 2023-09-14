/*
## Example 4 - Destructuring

Rewrite the function so that it accepts a parameters object with properties
`companyName` and `stock` and display a report about the number of goods in the warehouse
of any companies.

```js

*/

// Solution
function getStockReport(arg) {

  const { companyName: numeNouCompanie, stock } = arg;
  let total = 0;
  for (const value of Object.values(stock)) {
    total += value;
  }
  return `${numeNouCompanie} has ${total} items in stock`;
}

console.log(
  getStockReport({
    companyName: "Cyberdyne Systems",
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
); // "Cyberdyne Systems has 200 items in stock"

const obiectTrimisFunctiei = {
  companyName: 'Cyberdyne Systems',
  stock: {
    repairBots: 150,
    defenceBots: 50,
    attackBoots: 20,
    yellowBoots: 10
  }
}

console.log(getStockReport(obiectTrimisFunctiei));

console.log(
  getStockReport({
    companyName: "Belacci",
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
); // "Belacci has 35 item in stock"

