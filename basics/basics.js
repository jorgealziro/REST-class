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

const fruit = 'Banana'; // Cannot be reassigned or redeclared
