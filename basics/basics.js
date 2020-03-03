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
