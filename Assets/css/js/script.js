var timerEl = document.querySelector(".timer");
var startBtn = document.getElementById("startBtn");
var answerEl = document.getElementsByClassName(".answerBtn");
var timeLeft = 151;
var question
var currentQuestion = 0;
var score = 0;

var myQuestions = [{
  question: "Question #1: What is the name of the main character in the Kingdom Hearts franchise?",
  answers: { 
    a: "Goofy", 
    b: "Kairi", 
    c: "Sora", 
    d: "Riku"},
    correctAnswer: 2
  },{
    question: "Question #2: Who is the main antagonist of Birth By Sleep?",
    answers: {
      a: "Xehanort", 
      b: "Donald", 
      c: "Terra", 
      d: "Ventus"},
      correctAnswer: 1
  },{
    question: "Question #3: Who is the most powerful character?",
    answers: {
      a: "Aqua", 
      b: "Donald", 
      c: "Terra", 
      d: "Ventus"},
      correctAnswer: 1
  },{
    question: "Question #4: What is the primary weapon?",
  answers: {
    a: "Buster Sword", 
    b: "Ultima Weapon", 
    c: "X-Blade", 
    d: "Key Blade"},
  correctAnswer: 3
  },{
    question: "Question #5: Where is Sora teleported after the detruction of Destiny Islands?",
    answers: {
      a: "Hollow Bastian", 
      b: "Agrabrah", 
      c: "The Land of Departure", 
      d: "Traverse Town"},
    correctAnswer: 3
  },{
    question: "Question #6: Who is not a Key Blade master?",
    answers: {
      a: "Aqua", 
      b: "Eraqus", 
      c: "Terra", 
      d: "Mickey"},
    correctAnswer: 2
  },{
    question: "Question #7: Who are Donald and Goofy looking for when they encounter Sora?",
    answers: {
      a: "Aqua", 
      b: "Mickey", 
      c: "Xehanort", 
      d: "Ventus"},
      correctAnswer: 1
  },{
    question: "Question #8: Who is the most powerful character?",
    answers: {
      a: "Aqua", 
      b: "Donald", 
      c: "Terra", 
      d: "Ventus"},
    correctAnswer: 1
  },{
    question: "Question #9: Who is the most powerful character?",
    answers: {
      a: "Aqua", 
      b: "Donald", 
      c: "Terra", 
      d: "Ventus"},
    correctAnswer: 1
  },{
    question: "Question #10: Who is the most powerful character?",
    answers: {
      a: "Aqua", 
      b: "Donald", 
      c: "Terra", 
      d: "Ventus"},
    correctAnswer: 1
}];
    
console.log(myQuestions);

startBtn.addEventListener("click", startGame);

function startGame() {
  
  updateUI();
  getAnswer();
  startTimer();

}
function getAnswer() {
  let btn = document.querySelectorAll(".answerBtn");
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", bindClick(i));
  }
  
}
function bindClick(i) {
  return function () {
    console.log("you clicked region number " + i);
    console.log(myQuestions[currentQuestion].correctAnswer)
    if(i === myQuestions[currentQuestion].correctAnswer) {
      score++;
      console.log("correct!");
    } else {
      timeLeft = timeLeft-10;
    }
    currentQuestion++;
    updateUI();
    getAnswer();
  };
}
function updateUI() {
var questions = myQuestions[currentQuestion].question;
var chA = myQuestions[currentQuestion].answers.a;
var chB = myQuestions[currentQuestion].answers.b;
var chC = myQuestions[currentQuestion].answers.c;
var chD = myQuestions[currentQuestion].answers.d;

quiz.innerHTML = "<h3>" +questions+ "</h3>"

quiz.innerHTML += "<button Class='answerBtn'> A: " +chA+ "</button>"
quiz.innerHTML += "<button Class='answerBtn'> B: " +chB+ "</button>"
quiz.innerHTML += "<button Class='answerBtn'> C: " +chC+ "</button>"
quiz.innerHTML += "<button Class='answerBtn'> D: " +chD+ "</button>"
}

function startTimer() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds remaining";
  if(timeLeft === 0) {
    clearInterval(timeInterval);
    alert("Time's Up!");
  }
}, 1000);
}