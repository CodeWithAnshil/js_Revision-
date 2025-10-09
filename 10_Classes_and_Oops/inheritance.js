class user{
  constructor(username){
    this.username=username
  }
  logMe(){
    console.log(`Username id ${this.username}`);
  }
}

class Teacher extends user{
  constructor(username,eamil,password){
    super(username)
    this.email=eamil
    this.password=password
  }
  addCourse(){
    console.log(`A new course is added by ${this.username}`);
  }
}

const newuser = new Teacher('Ansh','ansh123@gmail.com',123456);
console.log(newuser.username);
newuser.logMe()
newuser.addCourse()