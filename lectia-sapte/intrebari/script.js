doSomething();
// doOtherThing();
// doSomethingArrow();

function doSomething() {
    console.log('Something');
}

const doOtherThing = function () {
    console.log('Something');
}

const doSomethingArrow = () => {
    console.log('Something');
    return 5;
}

doSomething();

doOtherThing();
doSomethingArrow();

const result = doSomethingArrow;
console.log(result());
console.log(result);