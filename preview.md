# ---------Project Related to DOM--------

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

## project 

```javascript
 const time=document.querySelector('.time')
  
  setInterval(function(){
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString()
  },1000);

```