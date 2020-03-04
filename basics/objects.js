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

