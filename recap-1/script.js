//  Primitive type 

/**
 * String
 */

let singleQuoteString = 'Single quote string';
let doubleQuoteString = "Double quote string";
let backTickString = `This is not a ${singleQuoteString}`;

// console.log(singleQuoteString.toUpperCase());
// console.log(backTickString.toUpperCase());

/**
 * Number
 */

singleQuoteString = 5;
let zipCode = 500500; // Ar trebui sa fie string

/**
 * Boolean
 */

let isTrue = true;
isTrue = !isTrue;

/**
 * Undefined
 */

let isUndefined;
// console.log(isUndefined);

/**
 * Null
 */

let isNull = null;
// console.log(isNull);
// console.log(typeof isNull);

// Reference type value => object, array, function

/**
 * Objects
 */

const myObject = {
    name: 'Sergiu',
    address: {
        city: 'Brasov',
        zip: 500500
    },
    logName: function() {
        console.log(this.name);
    }
}

const newObject = myObject; // copiem referinta
// const newObject = {...myObject}; // copiem doar proprietatile

newObject.name = 'Andrei';
// console.log(myObject);
// console.log(newObject);

const newDestructuredObj = {...myObject};
newDestructuredObj.name = 'Alex;'
newDestructuredObj.address.zip = 100;
// console.log(myObject);
// console.log(newDestructuredObj);

let stringifiedObject = JSON.stringify(newDestructuredObj);
// stringifiedObject += 5;
// console.log(stringifiedObject);

// myObject.logName();

const objNameDuplicate = myObject.name;
const logNameDuplicate = myObject.logName;
// logNameDuplicate();

const newName = {
    name: 'Andreea',
    logAnotherName: myObject.logName
}
// newName.logAnotherName();

/**
 * Array
 */

const myList = [1, 2, 3, 4, 2];
// console.log(typeof myList); // logheaza object

// const newIdenticalList = myList; // ne copiem referinta
const newIdenticalList = [...myList]; // ne copiem proprietatile intr-o referinta noua
newIdenticalList.push(5);
// console.log(myList);
// console.log(newIdenticalList);

const newDoubledCopyFail = myList.forEach((listItem) => { // forEach nu returneaza nimic
   return listItem * 2; // returnul nu va functiona
});

const newDoubledCopy = myList.map((listItem) => {
    return listItem * 2;
 });

// console.log('NewArray:', newDoubledCopy);

// Metoda find returneaza PRIMUL ELEMENT care indeplineste conditia
const valueTwo = myList.find( element => element === 2); // return este implicit
// console.log(valueTwo);

// Metoda filter returneaza UN ARRAY NOU cu TOATE elementele care indeplinesc conditia

const allValuesTwo = myList.filter(element => element === 2);
// console.log(allValuesTwo);


const students = [
    { name: "Vasile", courses: ["matematică", "fizică"] },
    { name: "Ion", courses: ["informatică", "matematică"] },
    { name: "Andreea", courses: ["fizică", "biologie"] },
  ];
  const allCourses = students.flatMap(student => student.courses);
//   console.log(allCourses);
  const uniqueCourses = allCourses.filter(
    (course, index, array) => {
       return array.indexOf(course) === index;
    }
  ); 

//   console.log(uniqueCourses);

const resultValue = myList.reduce((acc, curr) => {
    return acc * curr;
});
// console.log(resultValue)

/**
 * Functions
 */

const addFive = (number) => {
    return number + 5;
}

const newFunc = addFive; // copiem referinta functiei
// console.log(newFunc(11));
const tenResult = addFive(5); // ne folosim de valoarea returnata
// console.log(tenResult);

const addFiveTwice = ((number, addFiveCallback) => {
    return addFiveCallback(number) + 5;
});
// addFiveTwice(20, addFive); // nu fac ceva cu valoarea, nu o sa se intample nimic
const addFiveTwiceResult = addFiveTwice(30, addFive);
console.log(addFiveTwiceResult);
console.log(addFiveTwice(20, addFive));
console.log(addFiveTwice(10, (number) => number + 3));