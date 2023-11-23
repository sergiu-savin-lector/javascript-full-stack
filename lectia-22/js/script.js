// const foo = async () => {
//   await Promise.reject('Rejected');
//   return 'OK';
// }

// foo().then( value => console.log(value))
// .catch( error => console.log(error));

function getStone(stoneName) {
  const stones = {
    Emerald: {
      price: 1300,
      quantity: 4,
    },
    Diamond: {
      price: 2700,
      quantity: 3,
    },
    Sapphire: {
      price: 400,
      quantity: 7,
    },
    Rubble: {
      price: 200,
      quantity: 2,
    },
  };

  // return Promise.resolve(stones[stoneName]);
  return new Promise(resolve => setTimeout( () => resolve(stones[stoneName]), 1000));
}

// /*
//     1. await poate fi utilizat numai în cadrul funcțiilor asincrone
//     2. instrucțiunea await îngheață execuția unei funcții asincrone până când promisiunea intră în starea respinsă sau îndeplinită
//     (adică simulăm sincronicitatea în execuția codului asincron)
//     3. await nu va returna o promisiune, ci rezultatul acesteia
//     4. o funcție asincronă returnează întotdeauna o promisiune
// */

// const getStonesSequentiallyAsync = async () => {

//   console.time('getStone');
//   const emerald = getStone('Emerald');
//   const sapphire = getStone('Sapphire');
//   const stones = await Promise.all([emerald, sapphire]);
//   console.timeEnd('getStone');

//   console.dir(stones);
//   return stones;
// }

// function getStonesSequentially() {
//   getStone('Emerald').then( stone => {
//     console.log(stone);
//     getStone('Sapphire').then( stone => console.log(stone));
//   })
// }


// console.time('getStones');
// console.timeEnd('getStones');
// getStonesSequentially();

// console.log('Before');
// getStonesSequentiallyAsync();
// console.log('After');

/**
 * Macro tasks and Microtasks
 * ScriptQueue
 * PromiseJobs:
 */

console.log('1') // synchronus operation 1

setTimeout( () => console.log('2'), 0); // asynchronous operation, macro task, 5

const promise = new Promise( res => {
  console.log('3'); // synchronus operation 2
  res('4');
});

const test = async () => {
  console.log('5'); // synchronous operation 3
  const res = await new Promise(resolve => setTimeout( () => resolve('6'), 0))

  return res;
}

test().then(data => console.log(data));
promise.then( data => console.log(data));

console.log('7') // synchronous operation 4
