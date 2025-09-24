const obj1 = new Object() //this is singleton object
console.log(typeof obj1);
obj1.name="Anshil Maurya"
obj1.email="anshilmaurya1234@gmail.com"
obj1.phone = 8744637823
obj1.isLoggedIn =false
console.log(obj1);

const tinderUser = {} // Normal Object 
tinderUser.id = "123abc"
tinderUser.name = "Nivedan Maurya"
tinderUser.isLoggedIn = false

console.log(tinderUser);

//Concept of Nested Object...
const regularUser = {
  email:"sample@gmail.com",
  fullName:{
    useName:{
      firstName:"Anshil",
      lastName:"Maurya"
    }
  }
}

console.log(regularUser.fullName.useName.firstName);
console.log(regularUser.fullName.useName.lastName);

const obj = {"1":"a","2":"b"}
const obj2 = {"3":"c","4":"d"}

const obj3 ={obj,obj2} //this is not good practice we should avoid. 
console.log(obj3);

const obj4 = Object.assign({},obj,obj2) // we should also avoid to use this 
console.log(obj4);

const obj5 = {...obj,...obj2} // most of the cases, we will use this concept.
console.log(obj5);

//-------------------------------------------------------------------------
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

const keys = Object.keys(tinderUser)
const value = Object.values(tinderUser)
for  (i=0;i<keys.length;i++){
  console.log(keys[i]," : ",value[i])
}
//--------------------------------------------------------------------------
const anotherConcept =[
  {
    name : "Anshil Maurya",
    age  : 23,
    email : "anshilmaurya123@gmail.com"
  },
  {
    name : "Rajesh Maurya",
    age  : 22,
    email : "rajeshmaurya123@gmail.com"
  },
  {
    name : "Aman Yadav",
    age  : 23,
    email : "amanyadav123@gmail.com"
  }
]
console.log(anotherConcept[1].email);

const course = {
  id:"001",
  courseName:"js in hindi",
  couresInstructor:"Anshil "
}

// const {couresInstructor} = course // Or we can give a name 
//console.log(constInstructor);
const {couresInstructor : Instructor} = course
console.log(Instructor);
