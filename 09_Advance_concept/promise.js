// const promisesOne = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("Asyne 1 resolved");
//     resolve()
//   },1000)
// })

// promisesOne.then(function(){
//   console.log("Promised Consumed");
// })

// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("Asyne task 2");
//     resolve()
//   },1000)
// }).then(function(){
//   console.log("Asyne task 2 Resolved")
// })

// new Promise(function(resolve,reject){
//    setTimeout(function(){
//     resolve({username:"Chai",email:'anshilmaurya123@gmail.com'})
//    },1000)
// }).then(function(user){
//    console.log(user.email)
// })

// console.log("--------------------------------------------")

// const promiseFour = new Promise(function(resole,reject){
//   setTimeout(function(){
//     let error = false
//     if(!error){
//       resole({username:'Ansh',email:'anshmauray668@gmail.com'})
//     }else{
//       reject("Error : Something went wrong");
//     }
//   },1000)
// })

// promiseFour.then(function(user){
//   console.log(user);
//   return user.username 
// }).then(function(username){
//    console.log(username);
// }).catch(function(error){
//   console.log(error);
// })

const promiseFive = new Promise(function(resole,reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resole({Username:"Anshil Maurya",Age:23})
    }else{
      reject("Error : Js went wrong")
    }
  })
})

async function consumePromiseFive(){
  try{const response = await promiseFive
  console.log(response);
  }catch (error){
    console.log(error);
  }
}
consumePromiseFive()

