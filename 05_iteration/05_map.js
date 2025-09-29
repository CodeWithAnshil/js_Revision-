// map() yah auto return karta hai
const myNumber = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumber.map((num)=> {return num+10}) // or 
const newNums1 = myNumber.map((num)=> num+10)
console.log(newNums)
console.log(newNums1);

// chaining of methode like below

const newNums2 = myNumber
                  .map((num)=> num+10)
                  .map((num1)=>num1+2)
                  .filter((num2)=>num2%5==0)
console.log(newNums2)