// falsy => 0, -0, BigInt=n0, "", null, undefined, NaN
//truthy values "0","false"," ",[],{},function(){}
const userEmail = "0"
if(userEmail == 0){
  console.log("Array is empty");
}

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 =5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = undefined ?? null ?? 10
val1 = null ?? 11 ?? 12
console.log(val1);

//ternary operator

// condition ? true : false

const iceTeaPrice=200

iceTeaPrice>=100 ? console.log("More than 100"):console.log("Less than 100");
