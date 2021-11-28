var timerEl = document.querySelector(".timer");
var startBtn = document.getElementById("startBtn");
var questionEl = document.getElementById("#quiz");
var question, chA, chB, chC, chD;
var i = 0;
var score = 0;

console.log("hello");

var myQuestions = [{
   question: "Question #1: What is the name of the main character in the Kingdom Hearts franchise?",
   answers: { 
   a: "Goofy", 
   b: "Kairi", 
   c: "Sora", 
   d: "Riku"},
   correctAnswer: "c"
},{
   question: "Question #2: Who is the main antagonist of Birth By Sleep?",
   answers: {
     a: "Xehanort", 
     b: "Donald", 
     c: "Terra", 
     d: "Ventus"},
     correctAnswer: "d"
   }];

   console.log(myQuestions);

startBtn.addEventListener("click", startGame);

function startGame() {


  var timeLeft = 11;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds remaining";
      console.log(timerEl);
    if(timeLeft === 0) {
      clearInterval(timeInterval);
      alert("Time's Up!");
    }
    console.log(timeLeft);
  }, 1000);

  var questions = myQuestions[i].question;
  var chA = myQuestions[i].answers.a;
  var chB = myQuestions[i].answers.b;
  var chC = myQuestions[i].answers.c;
  var chD = myQuestions[i].answers.d;
    
  quiz.innerHTML = "<h3>" +questions+ "</h3>"
    
  quiz.innerHTML += "<button> A: " +chA+ "</button>"
  quiz.innerHTML += "<button> B: " +chB+ "</button>"
  quiz.innerHTML += "<button> C: " +chC+ "</button>"
  quiz.innerHTML += "<button> D: " +chD+ "</button>"

  for(i=0; i < myQuestions.length; i++){
    if(myQuestions[i] === myQuestions[i].correctAnswer) {
      score++;
      i++;
    }
  }
  console.log(score);
}