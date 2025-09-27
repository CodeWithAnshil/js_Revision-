//  Immediately Invoked Function Expression(IIFE)



function chai(){
  console.log(`DB CONNECTED`);
}
chai();

//this function can also be writen in ()() where first () for function and second () for execution.
// aur IIFE ko end karne ke liye ';' lagana padata hai
// n keval isame balki agar isake pahale koi normal function bhi hai to use execute karne ke bad ';' lagana padata hai

(function chai1(){
  console.log(`DB CONNECTED`);
})();

((name)=>{
  console.log(`Hello friends, My name is ${name}.`)
})("Anshil Maurya")

