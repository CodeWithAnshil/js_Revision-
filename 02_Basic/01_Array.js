//Array 

const myArray = [1,2,4,5,2,5]
console.log(myArray);
console.log(typeof myArray);

const myArray1 = new Array("Anshil","Ajay","Vijay")
console.log(myArray1);

myArray.push(9)
console.log(myArray);

myArray.pop()
myArray.pop()
console.log(myArray)


// myArray1.unshift("Anshil") // One Element is added at starting index of array 
// console.log(myArray1);

myArray1.shift() // One Element is remove from starting index of array
console.log(myArray1);


// concept of Slice and Splice
console.log("---------------------------------------------------");
console.log("A",myArray);
const newMyArray = myArray.slice(1,3)
console.log("B",newMyArray);

const myArray2=[1,2,4,5,2,5]
console.log("A1",myArray2);

const newMyArray2 = myArray2.splice(1,3)
console.log("B1",newMyArray2);


