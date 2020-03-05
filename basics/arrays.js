// Arrays example
let bananaQnt = [4, 5, 6, 3, 1];
console.log(`The fist pile of bananas has ${bananaQnt[0]} bananas`);

// Elements can have mixed types
let randomStuff = ['banana', 5, true, 4.123];

// Pop example
console.log(`${randomStuff.pop()} popped from ${randomStuff}`);

// Push example
randomStuff.push('YASS')
console.log(`${randomStuff} is my new array.`)

// Shift example
console.log(`${randomStuff.shift()} shifted from ${randomStuff}`);

// Unshift example
randomStuff.unshift('Grape')
console.log(`${randomStuff} is my new array.`);

// Concat example
console.log(`${randomStuff.concat(randomStuff)} for double randomness`);

// Reverse example
console.log(`${randomStuff.reverse()} is the reversed array`);

// Sort examples
console.log(`${randomStuff.sort()} just to see what's up`);
console.log(`${bananaQnt.sort()} are my organized bananas`);

// Slice example
console.log(randomStuff.slice(2));

// For Each helper example
bananaQnt.forEach(value => console.log(value*2));

// Map helper example
console.log(bananaQnt.map(i => i**2));

// Filter helper example
console.log(bananaQnt.filter(i => i % 2 === 0));

//Find helper example
let stuffs = [
    bananaQnt,
    randomStuff
];

console.log(stuffs.find(i => i.length < 5));

// Every helper function
console.log(bananaQnt.every(i => i > 2));

// Some helper function
console.log(bananaQnt.some(i => i > 2));

// Reduce helper function
console.log(bananaQnt.reduce((sum, pile) => {
    return sum + pile;
}, 0)/bananaQnt.length);