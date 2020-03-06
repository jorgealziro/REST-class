// Object literal
var bike = {
    // Properties
    make: 'Caloi',
    model: '10',
    body: 54,

    // Methods
    bikeName: function() {
        return `${this.make} ${this.model}`;
    }
};

// Calling object properties
console.log(`My byke is a ${bike['make']} ${bike.model} which is ${bike.body} inches long.`)

// Calling object methods
console.log(`${bike.bikeName()} rocks!`);

// Object constructor function example
function Backpack(make, material, year){
    this.make = make;
    this.material = material;
    this.year = year;
    this.getFullDescription = function() {
        return `${this.year} ${this.material} ${this.make} BP`;
    };
};

// Creating new instances
let sportSack = new Backpack('Nike', 'plastic', 2015);

console.log(sportSack.getFullDescription());

// Alternative ES6 constructor
function Backpack(make, material, year){
    return{
        make,
        material,
        year,
        getFullDescription() {
            return `${this.year} ${this.material} ${this.make} BP`;
        }
    };
};

let myBP = new Backpack('Swiss', 'polyester', 2011);
console.log(myBP.getFullDescription())

// Bind example

let backpackDescription = myBP.getFullDescription.bind(myBP);
console.log(backpackDescription());

// Call Example
function niceBike(compliment){
    console.log(`${compliment} ${this.make} ${this.model} dude!`);
};

niceBike.call(bike, 'Very cool');