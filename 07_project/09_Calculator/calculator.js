const btn=document.querySelectorAll('button');
const display = document.getElementById('display');
display.textContent=5
let currentValue="";
btn.forEach((button) => {
  button.addEventListener('click', () => handleValue(button.textContent));
});

document.addEventListener('keydown',(event)=>{
  const key= event.key;
    if (/[\d+\-*/.]/.test(key)) {
      currentValue += key;
      display.value = currentValue;   
    }else if(key === "Enter" || key==="="){
      calculate()
    }else if(key === "Backspace"){
      currentValue = currentValue.slice(0,-1)
      display.value=currentValue;
    }
    
})


function handleValue(value){
  if(value=="C"){
    clearDisplay();
  }else if(value=="="){
    calculate();
  }else{
    currentValue += value; 
    display.value = currentValue;
  }

}
function calculate(){
  try {
    currentValue  = eval(currentValue); 
    display.value = currentValue;
  } catch {
    display.value = "Error";
  }
}

function clearDisplay(){
  currentValue = "";
  display.value = "";
}
