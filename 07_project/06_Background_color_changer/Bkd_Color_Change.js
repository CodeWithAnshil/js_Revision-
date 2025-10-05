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
