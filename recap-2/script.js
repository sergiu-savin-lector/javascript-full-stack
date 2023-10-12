/**
 * Scope
 */

const myConst = 1;
let myLet = 2;

if (true) {
    let myConst = 3;
    const myLet = 4;
    const myLocalConst = 5;
    let myLocalLet = 6;
    // console.log(myConst, '--If/local scope');
    // console.log(myLet, '--If/local scope');
    // console.log(myLocalConst, '--If/local scope');
    // console.log(myLocalLet, '--If/local scope');
}

// console.log(myConst, '--Global scope');
// console.log(myLet, '--Global scope');
// console.log(myLocalConst, '--Global scope');
// console.log(myLocalLet, '--Global scope'); 

const addFive = (myConst) => {
    // console.log(myConst);
    return myConst + 5;
    // console.log(myConst); // acest cod nu va fi executat deoarece se afla dupa return
}

// console.log(addFive(10));

const addSix = (number) => {
    const result = number + 6; // nu returnam nimic, vom vedea undefined
}
// console.log(addSix(10));

const myArr = [1, 2, 3, 4];

let i = 100;
// console.log(i);
for (let i = 0; i < myArr.length; i++) {
    // console.log(`elementul ${myArr[i]} se afla la pozitia ${i}`)
}
// console.log(i);

const indexFirstElem = myArr.indexOf(1);
// console.log(`Elementul 1 se afla la pozitia ${indexFirstElem + 1}`);

/**
 * Ternary operator
 * Syntax: conditie ? valoare in caz de adevar : valoare in caz de fals
 */
let copyOfI = i > 50 ? i : 30;

// console.log(copyOfI);

if (i > 50) {
    copyOfI = i;
} else {
    copyOfI = 30;
}
// console.log(copyOfI);

// console.log(`Valoare pe care o are i este : ${ i > 50 ? i : 30}`);
// console.log(`Valoare pe care o are i este : ${ i > 50 ?? i }`);

const numbersArray = [1, 2, 3, 4];
numbersArray.push(5);
// numbersArray = [...numbersArray, 5]; // nu va functiona, va da eroare pentru ca este const
// console.log(numbersArray);


const testFunction = () => {
    // console.log('Test');
}

testFunction();

// Object literal creation
let puppy = {
    name: 'Rex',
    age: 5,
    name: 'Azorel',
    address: {
        city: 'London',
        levelTwo: {
            firstProp: 1,
            levelThree: 3,
            street: 'Long Street'
        }
    }
}

puppy.age = 7;
puppy.breed = 'Ciobanesc';
// console.log(puppy.breed);
// console.log(puppy);

puppy = {
    ...puppy,
    breed: 'Labrador'
}

const newPuppy = puppy;
const anotherPuppy = {...puppy,  ...puppy.address};

// console.log(puppy);
// console.log(puppy.address.levelTwo.street);

const { name, address, ...rest } = puppy;
console.log(name);
console.log(address);
console.log(rest);

const testArr = [1, 5, 3, 4];

const [first, second, third, ...celelalte] = testArr;
console.log(first);
console.log(second);
console.log(celelalte);

function testExtract() {
    let test = 'Test';
    function updateTest() {
        test = 'Updated';
    }

    return [test, updateTest];
}

const [testValueDestructured, updateTestDestructured] = testExtract();



