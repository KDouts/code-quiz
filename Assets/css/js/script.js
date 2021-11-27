var timerEl = document.querySelector(".timer");
var startBtn = document.getElementById("startBtn");

console.log("hello");

startBtn.addEventListener("click", startGame);

function startGame() {
    var timeLeft = 16;
  
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
  }

// var questions = [{
//     questions: "What is the name of the main character in the Kingdom Hearts franchise?",
//     answers: ["Goofy", "Kairi", "Sora", "Riku"],
//     correctAnswer: "Sora"
// },{
//     questions: "Who is the main antagonist of Birth By Sleep?",
//     answers: ["Xehanort", "Donald", "Terra", "Ventus"],
//     correctAnswer: "Xehanort"
// }]

// function generateQuiz (questions, quizContainer, resultsContainer, submitButton) {
//     function showQuestion(questions, quizContainer) {

//     }

//     function showResults(questions, quizContainer, resultsContainer) {

//     }

//     showQuestions(qustions, quizContainer);

//     submitButton.onclick = function(){
//         showResults(questions, quizContainer, resultsContainer);
//     }

// }