# Project Related To DOM

## Project link
[Click here](https://github.com/CodeWithAnshil/js_Revision-)

# Solution code

## Project 1
   
  ```javascript
 const box=document.querySelectorAll('.box');
  const body = document.querySelector('body');
  const colorMap={
    box1:'#e74c3c',
    box2:'#3498db',
    box3:'#2ecc71',
    box4:'#f1c40f'
  };
  box.forEach(function(box){
    box.addEventListener('click',function(e){
      const color = colorMap[e.target.id]
      if(color){
        console.log("color matched")
        body.style.backgroundColor= color
      }
    })

  })

  ```
## Project 2

```javascript
const form = document.querySelector('form')
 document
 form.addEventListener('submit',function(e){
  e.preventDefault();
  const height =parseInt(document.querySelector('#height').value);
  const weigth =parseInt(document.querySelector('#weight').value);
  console.log(height);
  console.log(weigth);
  const result =document.querySelector(".result");
  console.log(result)
  if(height===''|| height<0||isNaN(height)){
    result.innerHTML = `Please Enter A Valid Height`
  }else if(weight===''||weigth<0||isNaN(weigth)){
    result.innerHTML=`Please Enter A Valid Weight`
  }else{
    const BMI =(weigth/(Math.pow(height,2)/10000)).toFixed(2)
    result.innerHTML=`<span>Your BMI is ${BMI}</span>`
  }
 }

```

## project 3

```javascript
 const time=document.querySelector('.time')
  
  setInterval(function(){
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString()
  },1000);

```

## Project 4
```javascript
 const randomNum = Math.round(Math.random()*10+1);
  console.log(randomNum);
  const submit = document.querySelector('#submitBtn');
  const input = document.querySelector('#input');
  const message = document.querySelector('.message');
  const attempt = document.querySelector('.attempts');
  let attempts =0;
  const maxAttempts = 5;
  
  submit.addEventListener('click',function(e){
    e.preventDefault()
    if(attempts>=maxAttempts){
      message.innerHTML = `Game Over, You have used ${maxAttempts} changes attempts Random Number :${randomNum}`
      submit.disabled = true; 
      return;
    }
    const guess = parseInt(input.value);
    attempts++
    attempt.innerHTML =`Attempts : ${attempts}`
    if(randomNum===guess){
      message.innerHTML=`You guess is right ,Random Number : ${randomNum},Your Number :${guess}`
      submit.disabled =true
    } else if(randomNum>guess){
       message.innerHTML = `You guess number is lesser than actual number` 
    } else if(randomNum<guess){
       message.innerHTML = `You guess number is greater than actual number` 
    }

    if(attempts === maxAttempts && randomNum !== guess){
      message.innerHTML += `<br>😞 Game Over! सही नंबर था: ${randomNum}`;
      submit.disabled = true;
    }
  });

```

## Project 5

```javascript
  document.querySelector('#image').addEventListener('click',function(event){
    console.log(event.target.tagName);
    
    if(event.target.tagName==='BUTTON'){
      const removeIt = event.target.parentNode
      removeIt.remove() 
    }
  })
  

```
## Project 6

```javascript
const randomColor=function(){
  const hex = "0123456789ABCDEF";
  let  color="#"
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color
}
let intervalId
const startChangeBgColor = function(){
  if(!intervalId){
    intervalId = setInterval(colorBgChange,1000);
  }

  function colorBgChange(){
   document.body.style.backgroundColor=randomColor();
  }
}

const stopChangeBgColor = function(){
  clearInterval(intervalId);
  intervalId=null;
}

 document.getElementById('startBtn').addEventListener('click',startChangeBgColor);

 document.getElementById('stopBtn').addEventListener('click',stopChangeBgColor);

```

## Project 7

```javascript
const insert = document.getElementById('insert')
// console.log('kam kar raha hai')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
   <div class='class'>
    <table>
      <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
   </div>
  `
})

```