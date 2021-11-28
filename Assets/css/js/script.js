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

  for(i=0; i < myQuestions.length; i++){
    var answer = myQuestions[i];
    if(answer == myQuestions[i].correctAnswer) {
      score++;
    }
  }

  var questions = myQuestions[0].question;
  var chA = myQuestions[0].answers.a;
  var chB = myQuestions[0].answers.b;
  var chC = myQuestions[0].answers.c;
  var chD = myQuestions[0].answers.d;

  quiz.innerHTML = "<h3>" +questions+ "</h3>"

  quiz.innerHTML += "<button>" +chA+ "</button>"
  quiz.innerHTML += "<button>" +chB+ "</button>"
  quiz.innerHTML += "<button>" +chC+ "</button>"
  quiz.innerHTML += "<button>" +chD+ "</button>"

  console.log(score);
}
