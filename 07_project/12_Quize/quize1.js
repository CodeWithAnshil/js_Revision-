const QA=[
  {question:"Who is the first prime ministar of India",option:["Lal Bahadur Shastri","Patel ji","Jwahar lal Neharu","Mahatma Gandhi"],answer:3},
  {question:"Who is the first prime ministar of India",option:["Lal Bahadur Shastri","Patel ji","Jwahar lal Neharu","Mahatma Gandhi"],answer:3}
]


const questionText=document.getElementById('question');
const option=document.getElementById('options');
const nextBtn=document.getElementById('nextBtn');
const restartBtn=document.getElementById('restartBn');
const progress=document.getElementById('progerss');
const scoreEl =document.getElementById('score');
const playAgain=document.getElementById('playAgain');

const current=0, score=0;

// console.log(QA[0].question);
// nextBtn.addEventListener('click',function(){
//   =`${QA[0].question}`
// })

function loadQuestion(){
  const q = QA[current]
  questionText.textContent=`${q.question}`
  q.option.forEach((opt,i)=>{
    const li= document.createElement('li');
    li.textContent=opt;
    li.classList.add(li);
    li.dataset.index=i;
    li.onclick=()=> selectOption(li,i);
    option.appendChild(li);
  })
  progress.textContent=`Question ${current+1} of ${QA.length}`
  nextBtn.Disabled=true
}

function selectQuestion(li){
  
}