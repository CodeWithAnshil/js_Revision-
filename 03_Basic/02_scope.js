const name = "Anshil Maurya" // global variable 
if(true){
  let a = 12
  const b = "anshil"
  const name = "Jay Maurya" // local variable 
  console.log("Name : ",name)
}
console.log(name);

//Nested scope

function one(){
  const username = "Anshil"
  
  function two(){
    const website = "youtube"
    // console.log(usename) // throw error (username is not found)
  }
  // console.log(website); // throw error (website is not found)
  two()
}
one()



