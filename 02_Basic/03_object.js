//Singleton

// object literals
const mySym = Symbol()
const JsUser = {
  name:"Anshil Maurya",
  "father name": "Madhusudan",
  [mySym]:"myKeys",
  age : 23,
  location: "Prayagraj",
  email : "anshilmaurya123@gmail.com",
  isLoggedIn:false,
  lastLogginDays:["Monday","Tuesday","Wednesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["father name"]);
console.log(JsUser[mySym])

console.log(JsUser["isLoggedIn"]);

JsUser.email = "jyotimaurya133@gmail.com"
//-----------------------------------------------------------------------------------------------
// After using the concept of freeze() method or function these have feeze the object to change 
// Object.freeze(JsUser) 
// JsUser.email = "Jaymaurya123@gmail.com"
// console.log(JsUser);
//-----------------------------------------------------------------------------------------------

//creating function like below, that is called anonymous function 
JsUser.greeting = function(){
  console.log("Hello JS User...!! ${}")
}

JsUser.greetingTwo = function(){
  console.log(`Hello JS User...!! Your Email ID : ${JsUser.email}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
