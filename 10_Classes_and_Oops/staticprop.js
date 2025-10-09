class User{
  constructor(username){
    this.username=username
  }
  static createId(){
    return "435112"
  }
}

class Teacher extends User{
  constructor(username,email){
    super(username)
    this.email=email
  }
}


const iphone = new Teacher("iphone","iphone@12.com")

// console.log(iphone.createId()) // without using static keyword it will return "435112"
console.log(iphone.createId()) // using static keyword it will  return error "iphone.createId is not a function"