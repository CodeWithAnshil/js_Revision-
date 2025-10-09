const name = "Anshil    "
let myName="Maurya     "

console.log(name.trim().length);
console.log(myName)

let myHeros = ["Thore","Sprider"]
let yourHeros =["Saktiman","Hanuman"]
let heroPower = {
  thor:"hammer",
  spiderman:"sling",
  getSpiderManPower:function(){
    console.log(`Spider power is ${this.spiderman}`)
  }
}

heroPower.getSpiderManPower()

Object.prototype.Anshil = function(){
  console.log(`Hitesh is present in all object`)
}

Array.prototype.heyAnshil = function(){
  console.log(`Anshil Say Hello`)
}

heroPower.Anshil()
myHeros.heyAnshil()
yourHeros.heyAnshil()


// Inheritance

const user={
  username:"Anshil Maurya",
  email:'abc123@gmail.com'
}

const teacher={
  makeVideo:true
}

const techerSupport={
  isAvalable:true
}

const TASupport ={
  makeAssiment:'Js assignment',
  fullTime:true,
  __proto__:techerSupport,
}

teacher.__proto__= user

//modern syntax
Object.setPrototypeOf(techerSupport,teacher)

let anotherUserName="ChaiAurBiskit"

String.prototype.trimLength = function(){
  console.log(`${this}`)
  console.log(`${this.user}`)
  console.log(`True length is :${this.trim().length}`)
}

anotherUserName.trimLength()

"HelloMyNameIsAnshilMaurya".trimLength()
"Hello Bro".trimLength()