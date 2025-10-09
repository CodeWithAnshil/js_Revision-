function mutlipleBY5(num){
  return num*5
} 

mutlipleBY5.power=3
console.log(mutlipleBY5.power);
console.log(mutlipleBY5.prototype);
console.log(mutlipleBY5(5));

function createUser(username,email,score){
  this.username=username
  this.email=email
  this.score=score

  return this 
}

createUser.prototype.increment = function(){
  this.score++
}
createUser.prototype.printMe = function(){
  console.log(`Score is ${this.score}`);
}
const info1 = new createUser("Anshil","anshilmaurya13@gmail.com",23)
const info2 = new createUser("Ajay","ajaykumar123@gmail.com",42)

console.log(info1);
console.log(info2);

info1.printMe()
info2.printMe()