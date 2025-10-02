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