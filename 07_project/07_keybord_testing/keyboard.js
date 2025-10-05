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