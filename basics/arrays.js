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