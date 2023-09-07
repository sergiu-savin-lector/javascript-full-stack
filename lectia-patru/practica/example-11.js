var a = 1;
const b = 2;
let c = 3;

// if (true) {
//     var a = 3;
//     const b = 5;
//     let c = 6;
//     console.log(a, b, c);
// }



for (let i = 0; i < 5; i++) {
    var a = 4;
    const b = 5;
    let c = 6;
    console.log(a, b, c);
}

console.log(a, b, c);

function test() {
    var a = 7;
    const b = 8;
    let c = 9;
    console.log(a, b, c);
}
test();
console.log(a, b, c);

let a = 5;
 a = 7;