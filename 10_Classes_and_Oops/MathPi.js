console.log(Math.PI);
console.log(Math.PI=6);
Math.PI=7
console.log(Math.PI);

const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");

console.log(descriptor);

const chai={
  name:'ginger chai',
  price:268,
  isAvalable:true
}

// console.log(Object.getOwnPropertyDescriptor(chai,'name'));
// chai.name="Mashala Chai"
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,"name",{
  enumerable:false,
  consfiguration:false,
  writable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));
chai.name="Mashala Chai"
console.log(Object.getOwnPropertyDescriptor(chai,'name'));