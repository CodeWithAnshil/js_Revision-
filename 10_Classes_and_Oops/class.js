class User{
  constructor(username,email,password){
    this.username=username
    this.email=email
    this.password=password
  }
  encryptPassword(){
    return `${this.password}abc`
  }
  changeUsername(){
    return `${this.username.toUpperCase()}`
  }
}
const user = new User("Anshil Maurya","anshilmaurya2314@gmail.com",13124);
console.log(user.encryptPassword());
console.log(user.changeUsername());

console.log("===================================")

function User1(username,password,email){
  this.username = username
  this.password = password
  this.email = email
}

User1.prototype.encryptPassword = function (){
  return `${this.password}acs`
} 
User1.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`
}

const user1= new User1("King",1234567,"king123@gmail.com")
console.log(user1.changeUsername());