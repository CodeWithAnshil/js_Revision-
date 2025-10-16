const inputBtn = document.getElementById('inputBtn');
const input = document.querySelector('#input');
// const text = document.getElementById('text');
// const edit = document.querySelector('.edit');
// const deleteEl = document.querySelector('.delete');
const notesContainer = document.querySelector('.notes-container');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks(){
  localStorage.setItem('tasks',JSON.stringify(tasks));
}
function loadTask(){
  tasks.forEach((task)=>{
   showInput(task)
  })
}
input.addEventListener('keydown',function(event){
  const key = event.key;
  if(key=="Enter"){
    addTask();
  }
})
inputBtn.addEventListener('click',addTask);

function addTask(){
  const inputs = input.value.trim();
  if(!inputs){
    alert("Please add some line");
    return;
  }
  // console.log(inputs);
  
  const newTask = { id: Date.now(), text: inputs };
  tasks.push(newTask);
  showInput(newTask);
  saveTasks();
  input.value='';
}

function showInput(newTask){
  const noteCard = document.createElement('div');
  noteCard.classList.add('note-card')
  noteCard.dataset.id = newTask.id;
  const noteText = typeof newTask === 'object' ? newTask.text : newTask;
  noteCard.innerHTML=`
      <p id="text">${noteText}</p>
        <div class="note-actions">
          <span class="edit"></span>
          <span class="delete"></span>
        </div>
  `
  notesContainer.appendChild(noteCard);
}

notesContainer.addEventListener('click',function(event){
    const note = event.target.closest('.note-card');
    if (!note) return;
    const noteId = note.dataset.id;

    if (event.target.classList.contains('delete')) {
      note.remove();
      tasks = tasks.filter(t => t.id != noteId);
      saveTasks();
    }
   if (event.target.classList.contains('edit')) {
    const p = note.querySelector('#text');
    const newText = prompt("Edit your text:", p.textContent);
    if (newText && newText.trim() !== "") {
      p.textContent = newText.trim();
      const index = tasks.findIndex(t => t.id === noteId);
      tasks[index].text = newText.trim();
      saveTasks();
    }
  }
  })

window.addEventListener('DOMContentLoaded', loadTask);