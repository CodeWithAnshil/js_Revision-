//Object Literal

const User ={
  username:"Anshil Maurya",
  loginCount:8,
  signedIn:true,
  getUserDetails: function(){
    console.log(this.username);
    console.log(this);
  }
}

// console.log()
// User.getUserDetails()



function user(username, loginCount, signedIn){
  this.username=username
  this.loginCount=loginCount
  this.signedIn=signedIn

  this.greeting= function(){
    console.log(`Welcome ${username}`)
  }


  return this // It is not neccessary to return because it is default feature.

}

// "new" keyword is called 'constructor function'. if we do not use "new" keyword for object creation then second object override first object. where as we use "new" keyword for object creation then bith object are differe from each other.
const userOne = user("Anshil Maurya",8,false);
const userTwo = user("Jyoti Maurya",1,true); // it will override to fist object
// console.log(userOne);

const userThree = new user("Nivedan Maurya",2,true);
const userFour = new user("Aman",4,false);
console.log(userThree);
console.log(userFour);
