// console.log("Kam Kar raha hai");
const date = document.getElementById('taskDate');
const time =  document.getElementById('taskTime');
const text = document.getElementById('taskText');
const add = document.getElementById('addBtn');
const Delete = document.getElementById('delete');


const taskBody = document.querySelector('#task-body');

//load the task from localStorage when the page loads
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


function saveTasks(){
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

function renderTasks(){
  taskBody.innerHTML='';

  tasks.forEach((tasks, index)=>{
    const newRow= document.createElement('tr')
    console.log(tasks.Text)
    newRow.innerHTML=`<td>${tasks.text}</td>
                      <td>${tasks.date}</td> 
                      <td>${tasks.time}</td>
                      <td><button id="delete" class="delete-btn">Delete</button></td>`

    taskBody.appendChild(newRow); 

  });
}
taskBody.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    const index = e.target.getAttribute('data-index');
    tasks.splice(index, 1); // remove from array
    saveTasks();            // save updated list
    renderTasks();          // re-render updated table
  }
});



add.addEventListener('click',function(e){
  e.preventDefault()
  let Date = date.value
  let Time =  time.value
  let Text = text.value.trim()
  //  console.log(Date)
  //  console.log(Time)
  //  console.log(Text)
  if(!Time || !Date || !Text){
    alert("Please fill all field")
    return;
  }
  tasks.push({ text:Text,date:Date,time:Time});
  saveTasks();
  renderTasks();
  
  date.value=''
  time.value=''
  text.value=''

})

renderTasks()