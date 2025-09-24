const num = 1234
const otherNumber = new Number(num);

console.log(typeof otherNumber);
console.log(otherNumber.toFixed(1));
const number2= 2342.3432
console.log(number2.toPrecision(5))

const number3 = 100000000000
console.log(number3.toLocaleString("en-In"));


// -------------------------------------------------
console.log((Math.random()*10) + 1);

const min = 10
const max = 20 


console.log(Math.round(Math.random()*((max-min)+1)) + min);


const number4 = 234
console.log(number4.toString().length);// length = 3
