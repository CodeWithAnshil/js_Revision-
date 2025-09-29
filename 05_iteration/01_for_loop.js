// for

for (let i =1; i<=10;i++){
//  console.log(i,`Hello dosto kya hal chal sab badiya`)
}

const array =[1,2,3,4,6,3,7,4,3]
const result =[]
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  result.push(element)
}
// console.table(result)

// Nested Loop (we have printed table for understand the concept of nested loop)
for (let i=1;i<=30;i++){
  for (let j=1;j<=10;j++){
    // console.log(i," * ",j ," = ",i*j)
  }
  // console.log("----------------------")
}

// braek & continue
const array1 =[]
for (let i =1; i<=100;i++){
  
 if(i%5==0){
  console.log(`removed ${i}`);
  array1.push(i)
  continue;
 }else{
  console.log(i);
 }
}
console.log(array1)