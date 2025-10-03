  /*document.getElementById('img4').onclick= function(){
    alert("Get image number 4")
  } */

  /*
   type,timeStamp, preventDefault
   targent,toElement,srcElement,currentTarget
   clientX, clientY,screenX, screenY
   altkey, ctrkey, shifkey, keyCode
  
  */

  //false(event propagation) bydefault set hota hai aur is case me niche se uppar ki taraf ja raha hai is liye ise Bouble case bhi kaha jata hai

  //true set karane pr yah uppar se niche ki or jata hai jis prakar code likha hai
  //document.getElementById('image').addEventListener('click',function(){
    //console.log("Click inside the ul")
  //})
  //document.getElementById('img1').addEventListener('click',function(e){
  //  console.log("click on specific image");
  //  e.stopPropagation() //ab yah bouble ho kar uppar nhi jayega using e.stopPropagation()
  //})
  //document.getElementById('google').addEventListener('click',function(e){
  //  e.preventDefault() //with the help of this. we never goes to the web page of google using e.preventDefault()
  //  e.stopPropagation()
  //  console.log('Google clicked')
  //})
  document.querySelector('#image').addEventListener('click',function(event){
    console.log(event.target.tagName);
    
    if(event.target.tagName==='BUTTON'){
      const removeIt = event.target.parentNode
      removeIt.remove() 
    }
  })
