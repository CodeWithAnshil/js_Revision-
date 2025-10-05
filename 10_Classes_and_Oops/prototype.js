const name = "Anshil    "
let myName="Maurya     "

console.log(name.trim().length);
console.log(myName)

let myHeros = ["Thore","Sprider"]

let heroPower = {
  thor:"hammer",
  spiderman:"sling",
  getSpiderManPower:function(){
    console.log(`Spider power is ${this.spiderman}`)
  }
}

heroPower.getSpiderManPower()