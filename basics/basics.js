// Variables for JS begin with "var", "let" or "const"
// Reminder: JS is dynamically typed
// No reserved words, no starting var name with numbers or $ for instance
// Preferrably camelCase

var fullName = 'Jorge Alziro Ramos';

var isGoodBoy = true;

// Example of template string
if (isGoodBoy){
    console.log(`${fullName} is a fine lad.`);
};

// Example ES6 variables
let catName = 'Janga'; // Cannot be redeclared
console.log(catName);
catName = 'Langa'; // But it can be reassigned
console.log(catName);

// Switch/case example
const fruit = 'Cato'; // Cannot be reassigned or redeclared

switch (fruit) {
    case 'Lemon':
        console.log('Fruit is LEMON');
        break;
    case 'Banana':
        console.log('Fruit is BANANA');
        break;
    case 'apple':
        console.log('Fruit is APPLE');
        break;
    default:
        console.log('IS NO FRUIT WHY');
}

// While example
let counter = 10;
while (counter < 15) {
    console.log(counter++)
}

// Do-while example
counter = 5
do {
    console.log(`counting a ${counter}`);
    counter++;
} while (counter < 10);

// For example
for (let i = 1; i < 10; ++i) {
    console.log(`for the ${i}!`)
}

// Function examples 
function sayHi(name) {
    console.log(`SUP ${name}!`);
};

sayHi('Jorge');

function simpleSum(a, b, c) {
    return a + b + c;
};

let result = simpleSum(4, 6, 7);
console.log(result);

// IIFI example
let scream = (function(name, age) {
    return `SUUUUP ${name} YOU ARE ${age}`;
}('Jorge', 3));

console.log(scream);

// ES6 fat arrow equivalent

let scream6 = (name, age) => `SUUUUP ${name} YOU ARE ${age} NOW`('Jorge', 4);

console.log(scream);
