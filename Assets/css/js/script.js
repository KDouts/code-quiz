var timerEl = document.querySelector(".timer");
var startBtn = document.getElementById("startBtn");
var answerEl = document.getElementsByClassName(".answerBtn");
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
      correctAnswer: 3
    },
    {question: "Question #3: Who is the most powerful character?",
    answers: {
      a: "Xehanort", 
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
      
    function startTimer() {
      var timeLeft = 11;
      var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining";
      // console.log(timerEl);
      if(timeLeft === 0) {
        clearInterval(timeInterval);
        alert("Time's Up!");
      }
      // console.log(timeLeft);
    }, 1000);
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

      function getAnswer() {
        let btn = document.querySelectorAll(".answerBtn");
        for (var i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", bindClick(i));
        }

        function bindClick(i) {
            return function () {
                console.log("you clicked region number " + i);
                console.log(myQuestions[currentQuestion].correctAnswer)
                if(i === myQuestions[currentQuestion].correctAnswer) {
                  score++;
                }
                currentQuestion++;
                updateUI();
                getAnswer();
                startTimer();

            };
        }
    }
 }