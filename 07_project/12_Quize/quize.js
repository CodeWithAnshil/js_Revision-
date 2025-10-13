
    const quizData = [
      { question: "Which language runs in a web browser?", options: ["Java", "C", "Python", "JavaScript"], answer: 3 },
      { question: "What does CSS stand for?", options: ["Central Style Sheets","Cascading Style Sheets","Cascading Simple Sheets","Computer Style Sheets"], answer: 1 },
      { question: "Which HTML tag is used for the largest heading?", options: ["<h6>", "<head>", "<h1>", "<header>"], answer: 2 },
      { question: "Which operator assigns value in JavaScript?", options: ["=", "==", "===", "=>"], answer: 0 },
      { question: "Inside which HTML element do we put the JavaScript?", options: ["<script>", "<js>", "<javascript>", "<code>"], answer: 0 }

    ]
    let current = 0, score = 0;

    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");
    const restartBtn = document.getElementById("restartBtn");
    const progressEl = document.getElementById("progress");
    const resultBox = document.getElementById("result-box");
    const quizBox = document.querySelector(".quiz-box");
    const scoreEl = document.getElementById("score");
    const playAgain = document.getElementById("playAgain");

    function loadQuestion() {
      const q = quizData[current];
      questionEl.textContent = q.question;
      optionsEl.innerHTML = "";
      q.options.forEach((opt, i) => {
        const li = document.createElement("li");
        li.textContent = opt;
        li.classList.add("option");
        li.dataset.index = i;
        li.onclick = () => selectOption(li, i);
        optionsEl.appendChild(li);
      });
      progressEl.textContent = `Question ${current + 1} of ${quizData.length}`;
      nextBtn.disabled = true;
    }

    function selectOption(li, index) {
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      li.classList.add("selected");
      nextBtn.disabled = false;
      li.dataset.index = index;
    }

    nextBtn.addEventListener("click", () => {
      const selected = document.querySelector(".selected");
      if (!selected) return;
      const selectedIndex = Number(selected.dataset.index);
      if (selectedIndex === quizData[current].answer) {
        score++;
        selected.classList.add("correct");
      } else {
        selected.classList.add("wrong");
      }
      setTimeout(() => {
        current++;
        if (current < quizData.length) {
          loadQuestion();
        } else {
          showResult();
        }
      }, 700);
    });

    function showResult() {
      quizBox.classList.add("hidden");
      resultBox.classList.remove("hidden");
      scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
    }

    restartBtn.addEventListener("click", resetQuiz);
    playAgain.addEventListener("click", resetQuiz);

    function resetQuiz() {
      current = 0;
      score = 0;
      quizBox.classList.remove("hidden");
      resultBox.classList.add("hidden");
      loadQuestion();
    }

    loadQuestion();
 