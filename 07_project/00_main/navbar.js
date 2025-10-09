const path="../00_main/navbar.html"
const path1="../00_main/index.html"
fetch(path)
.then(respons=>respons.text())
.then(html=>{
  document.body.insertAdjacentHTML("afterbegin",html);
  document.querySelector("#home").addEventListener('click',()=>{
    window.location.href=path1
  })
})
