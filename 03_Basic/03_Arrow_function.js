// use of 'this' 
//current context ko refer karane ke liye this keyword ka use kiya jata hai

const  user={
  usename:"Anshil Maurya",
  price:999,
  welcomeMessage: function(){
    console.log(`${this.usename}, welcome to website`);
    console.log(this);
    
  }
}

// user.welcomeMessage()
// user.usename="king" // change context 
// user.welcomeMessage()

//---------------------------------
function chai(){
  let username = "Anshil"
  console.log(this.usename); // this is work in function (given example this.username will show undefined ) 
} 
// chai()

//-----------------------
// Arrow function example

const arrowFunc = ()=>{
   let username = "Anshil"
   console.log(this.usename); // it will show undefined
   
   console.log(this); // this is onle empty set {}
}
// arrowFunc()

const addtwo1 = (number1, number2)=>{
  return number1+number2
}
// console.log(addtwo1(3,5));

const addtwo2 =(number1,number2)=>(number1+number2) // Here we can use with and without paranthisis both is right. 

// console.log(addtwo2(4,6));
// agar {} user kar raha hai to return keyword use karna padega ya fir ise paranthesis ke under use karana padega 

console.log(addtwo3());
