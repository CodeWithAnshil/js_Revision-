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
 })