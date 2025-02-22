const score = 400
// console.log(score); // 400


// const balance = new Number (100)
// console.log(balance); //[Number : 100]

// console.log(balance.toString().length); //3 became a stirng 
// console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.9553 
// console.log(otherNumber.toPrecision(2)); //24 if it is 23.9553  precise value
// console.log(otherNumber.toPrecision(3));  //124 if it is 123.9553  precise value


const hundreds  = 1000000
// console.log(hundreds.toLocaleString()); //1,000,000
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000


////++++++++++++++++++Maths +++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //absolute value => 4 
// console.log(Math.round(4.3)); // 4
// console.log(Math.ceil(4.2));  // top value 5
// console.log(Math.floor(4.2)); // down value 4
// console.log(Math.min(4,3,6,7,8,9)); // 3

console.log(Math.random()); // numbers b/w 0 and 1 only random values
console.log(Math.floor((Math.random()*10)) + 1); // 0 to 9

const min = 10 
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 

