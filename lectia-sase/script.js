const original = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = original;
const copy = [...original];
const fakeCopy = original;

fakeCopy.push(6);

console.log(original);
console.log(copy);
console.log(fakeCopy);

const originalObject = {
    name: 'Sergiu',
    age: 25,
    address: {
        city: 'London',
        zip: 500500
    }
};

const copyObject = {...originalObject, address: {...originalObject.address}};
const fakeObjectCopy = originalObject;
fakeObjectCopy.name = 'Alex';

copyObject.name = 'Bob';
copyObject.address.city = 'Bucharest';

console.log(originalObject);
console.log(fakeObjectCopy);
console.log(copyObject);



