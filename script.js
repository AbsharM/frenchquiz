const question = [
  {
    question: "Il achète ____ ses cahiers à la papeterie.?",
    answers: [
      { text: "toute", correct: "false" },
      { text: "tous", correct: "true" },
      { text: "toutes", correct: "false" },
      { text: "tout", correct: "false" },
    ],
  },
  {
    question: "Nous travaillons ____ la journée.",
    answers: [
      { text: "toute", correct: "true" },
      { text: "tous", correct: "false" },
      { text: "toutes", correct: "false" },
      { text: "tout", correct: "false" },
    ],
  },
  {
    question: "____ les filles sont belles?",
    answers: [
      { text: "toute", correct: "false" },
      { text: "tous", correct: "false" },
      { text: "toutes", correct: "true" },
      { text: "tout", correct: "false" },
    ],
  },
  {
    question: "Elle parle ____ le temps.?",
    answers: [
      { text: "toute", correct: "false" },
      { text: "tous", correct: "false" },
      { text: "toutes", correct: "false" },
      { text: "tout", correct: "true" },
    ],
  },
  {
    question: "Il étudie _____ les leçons.?",
    answers: [
      { text: "toute", correct: "false" },
      { text: "tous", correct: "false" },
      { text: "toutes", correct: "true" },
      { text: "tout", correct: "false" },
    ],
  },
  {
    question: "Je travaille _____ la soirée.?",
    answers: [
      { text: "toute", correct: "true" },
      { text: "tous", correct: "false" },
      { text: "toutes", correct: "false" },
      { text: "tout", correct: "false" },
    ],
  },
  {
    question: "____ le monde revient dans une semaine?",
    answers: [
      { text: "toute", correct: "false" },
      { text: "tous", correct: "false" },
      { text: "toutes", correct: "false" },
      { text: "tout", correct: "true" },
    ],
  },
  {
    question: "Il répond à _____ les questions.?",
    answers: [
      { text: "toute", correct: "false" },
      { text: "tous", correct: "false" },
      { text: "toutes", correct: "true" },
      { text: "tout", correct: "false" },
    ],
  },
  {
    question: "Elle connaît _____ la famille.?",
    answers: [
      { text: "toute", correct: "true" },
      { text: "tous", correct: "false" },
      { text: "toutes", correct: "false" },
      { text: "tout", correct: "false" },
    ],
  },
  {
    question: "______ les voitures sont en route vers la France.?",
    answers: [
      { text: "toute", correct: "false" },
      { text: "tous", correct: "false" },
      { text: "toutes", correct: "true" },
      { text: "tout", correct: "false" },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("Answer-buttons");
const nextButton = document.getElementById("next_but");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "NEXT";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answers) => {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("Correct");
    score++;
  } else {
    selectedBtn.classList.add("Incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("Correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${question.length}!`;
  nextButton.innerHTML = "Try Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < question.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < question.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
