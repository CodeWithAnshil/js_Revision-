// datatype => there are two type of data

// 1. primitive type
   
      // total 7 => String, boolean, number, bigint, null, undefined, Symbol.

// 2. non primitive type
     
     // Object, function, Array


//memory => classified into two categories.
      //   1. Stack(Primitive Type) => All privitive datatype store in stack.
      //   2. Heap(non primitive) => where as All non primitive datatype store in heap.

// Example of heap Memory
     let obj1 ={
      name   : "Anshil Maurya",
      Age    : 23,
      father : "Madhusudan Maurya",
      Mother : "Rama Devi",
      Sister : "Jyoti "
     }
     
     let obj2 = obj1

     console.log(obj1.name);
     obj2.name= "Nivedan Maurya" 
     console.log(obj2.name);

// Example of stack memory

let accountId = "1234"

let newAccountID = accountId
newAccountID="1A"
console.log(accountId);

console.log(newAccountID);



     



     
     