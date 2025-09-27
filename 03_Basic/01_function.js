
// function executes(){
//   console.log("Hello dear...");
//   console.log("How are you.");
// }
// executes()

//---------------------------------------------------
function addTwoNumber(number1,number2){
  return number1 + number2
}
const sum = addTwoNumber(3,4)
console.log(sum);

//---------------------------------------------------
function loginUserMessage(username){
  
  if(!username){
   return "Please enter a username"
  }
  return `${username} just logged in`
}

console.log(loginUserMessage("Anshil"))

//--------------------------------------------------
const user = {
  name:"Anshil",
  price:2345
}

function handleObject(anyObject){
 console.log(`Username is ${anyObject.name} and the price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
  name:"Jay",
  price:12342
})

//-------------------------------------------------------
const myArray = [200,100,400]
function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue(myArray));