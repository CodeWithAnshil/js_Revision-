function SetUsername(username){
  this.username=username

}
function createUser(username,email,password){
  SetUsername.call(this,username)
  this.password=password
  this.email=email
}

const chai = new createUser("chai","chai@fb.com",1234)
console.log(chai);
